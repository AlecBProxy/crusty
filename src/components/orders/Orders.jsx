import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import './orders.css'


const Orders = ({ orders, deleteOrder }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  const closeModal = () => {
    setOpen(false);
  };

  const totalPrice = orders.reduce((total, order) => total + order.price, 0);

  // Animation variants for the overlay
  const overlayVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 0.9 },
    exit: { opacity: 0 }
  };

  // Animation variants for the modal
  const modalVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 20 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <div className="orders-container">
      <div className="orders-btn" onClick={handleOpen}>
        {orders.length === 0 ? <p>🛒</p> : ''}
        <div className="pizza-emojis">
          {orders.length < 5 ?
            orders.map((_, index) => (
              <p key={index}>🍕</p>
            )) : <p className="pizza-many">🍕✖️ {orders.length}</p>
          }
        </div>
        <p>${totalPrice}</p>
      </div>

      <AnimatePresence>
        {open &&
          <motion.div
            className="modal-overlay"
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={closeModal}>
            <motion.div
              className="orders-modal open"
              variants={modalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={(e) => e.stopPropagation()} >
              <div className="order-list">
                {orders.map((order, index) => (
                  <div key={index} className="order-item">
                    <p>{order.name}</p>
                    <p>{order.size}&quot;</p>
                    <p>${order.price}</p>
                    <p onClick={() => deleteOrder(order.id)}>🅧</p>
                  </div>
                ))}
              </div>
              <div className="order-total">
                <h3>Total</h3>
                <p>${totalPrice}</p>
              </div>
              <Link
                to="/checkout"
                className="order-btn"
                onClick={closeModal}
              >Order Now</Link>
            </motion.div>
          </motion.div>}
      </AnimatePresence>
    </div>
  )
}

export default Orders