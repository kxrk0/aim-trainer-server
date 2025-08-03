# 🎯 AIM TRAINER PRO - SERVER

Backend API ve Socket.IO server for AIM TRAINER PRO desktop application.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL
- PM2 (for production)

### Development
```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env with your database credentials

# Generate Prisma client
npm run db:generate

# Start development server
npm run dev
```

### Production Deployment

#### VPS Deployment (Recommended)
```bash
# Clone repository
git clone https://github.com/USERNAME/aim-trainer-server.git /opt/aim-trainer-server

# Run deployment script
cd /opt/aim-trainer-server
chmod +x deploy.sh
sudo ./deploy.sh
```

## 📦 Environment Variables

```bash
NODE_ENV=production
PORT=3002
DATABASE_URL=postgresql://aim_user:strong_password_123@localhost:5432/aim_trainer
JWT_SECRET=AimTrainer2025_ProVPS_SecureJWT_9f8e7d6c5b4a3928374659283746592837465928374659283746
CORS_ORIGIN=https://aim.liorabelleleather.com
SOCKET_IO_CORS_ORIGIN=https://aim.liorabelleleather.com

# Optional Redis for caching
# REDIS_URL=redis://localhost:6379
# REDIS_PASSWORD=
```

## 🔧 API Endpoints

### Health Check
```
GET /health
```

### Authentication
```
POST /api/auth/login
POST /api/auth/register
GET  /api/auth/me
```

### Games
```
GET    /api/games
POST   /api/games
PUT    /api/games/:id
DELETE /api/games/:id
```

### Leaderboards
```
GET /api/leaderboards
GET /api/leaderboards/:gameMode
```

### Users
```
GET /api/users/profile
PUT /api/users/profile
```

## 🔌 Socket.IO Events

### Connection
```javascript
// Client connects with auth token
socket.emit('authenticate', { token: 'jwt_token' })
```

### Party System
```javascript
// Create party
socket.emit('party:create', { name: 'Party Name' })

// Join party
socket.emit('party:join', { partyId: 'party_id' })

// Leave party
socket.emit('party:leave')
```

### Competition
```javascript
// Join matchmaking
socket.emit('competition:join', { gameMode: 'aim_trainer' })

// Leave matchmaking
socket.emit('competition:leave')
```

## 🗄️ Database Schema

### Users
- id, email, username, password_hash
- created_at, updated_at

### Games
- id, user_id, game_mode, score, accuracy
- duration, targets_hit, targets_missed
- created_at

### Parties
- id, name, leader_id, max_members
- created_at, updated_at

### PartyMembers
- party_id, user_id, joined_at

## 📊 Monitoring

### PM2 Commands
```bash
pm2 status                    # Service status
pm2 logs aim-trainer-pro      # View logs
pm2 monit                     # Real-time monitoring
pm2 restart aim-trainer-pro   # Restart service
```

### Health Checks
```bash
# Local
curl http://localhost:3002/health

# Production
curl https://aim.liorabelleleather.com/health
```

## 🔄 Updates

```bash
# Pull latest changes
git pull origin main

# Install dependencies
npm install --production

# Build
npm run build

# Restart PM2
pm2 reload aim-trainer-pro
```

## 📁 Project Structure

```
src/
├── config/          # Database & auth configuration
├── controllers/     # Request handlers
├── middleware/      # Express middleware
├── routes/          # API route definitions
├── services/        # Business logic
├── sockets/         # Socket.IO event handlers
├── types/           # TypeScript type definitions
└── utils/           # Utility functions

shared/
└── types/           # Shared types with client

prisma/
├── schema.prisma    # Database schema
└── migrations/      # Database migrations
```

## 🧪 Testing

```bash
# Health check
npm run health

# Database connection test
npm run test:connection
```

## 📞 Support

For issues and questions:
1. Check logs: `pm2 logs aim-trainer-pro`
2. Verify health: `curl https://aim.liorabelleleather.com/health`
3. Check database: `psql -h localhost -U aim_user -d aim_trainer`

## 📄 License

MIT License - see LICENSE file for details. 