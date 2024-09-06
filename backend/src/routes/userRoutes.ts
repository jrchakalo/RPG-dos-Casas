import express from 'express';
import { registerUser, loginUser, getProfile, updateProfile, leaveTable, removePlayer, getCharacterSheet, joinTable, transferDM } from '../controllers/userController';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = express.Router();

// Rota de cadastro
router.post('/register', registerUser);

// Rota de login
router.post('/login', loginUser);

// Rota de perfil (protegida)
router.put('/profile', authenticateToken, updateProfile);

// Sair de mesa
router.post('/profile/leaveTable', authenticateToken, leaveTable); 

// Remover jogador da mesa
router.post('/profile/removePlayer', authenticateToken, removePlayer); 

// Obter ficha de personagem
router.post('/profile/characterSheet', authenticateToken, getCharacterSheet); 

// Entrar em uma mesa
router.post('/profile/joinTable', authenticateToken, joinTable);

// Transferir DM
router.post('/profile/transferDM', authenticateToken, transferDM);

export default router;
