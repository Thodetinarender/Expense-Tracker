// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');
// const Expense = require('../models/expense'); // Import Expense model
// import { createPaymentOrder, verifyPaymentStatus } from "../controllers/paymentController.js";

// // Authentication middleware
// const { authenticateToken } = userController;

// // Authentication routes
// router.post('/signup', userController.signup);
// router.post('/signin', userController.signin);

// // Protected expense routes
// router.post('/add-expense', authenticateToken, userController.addExpense);

// router.get('/expenses', authenticateToken, userController.expenses);

// router.delete('/expense/:id', authenticateToken, userController.deleteExpense);


// router.post("/create-order", authenticateToken, createPaymentOrder);
// router.get("/payment-status/:orderId", verifyPaymentStatus);

// module.exports = router;

import express from "express";
import { signup, signin, authenticateToken, addExpense, expenses, deleteExpense,getAllUsersTotalExpenses } from "../controllers/userController.js";

const router = express.Router();

// Authentication routes
router.post("/signup", signup);
router.post("/signin", signin);

// Protected expense routes
router.post("/add-expense", authenticateToken, addExpense);
router.get("/expenses", authenticateToken, expenses);
router.delete("/expense/:id", authenticateToken, deleteExpense);

//Premium Users
router.get('/total-expenses', authenticateToken, getAllUsersTotalExpenses);


export default router; // ✅ Use ES Modules

