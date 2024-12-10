# Use Nixpacks
FROM railwayapp/nixpacks

# Copy backend and frontend
WORKDIR /app

# Install backend dependencies
WORKDIR /app/backend
RUN pip install -r requirements.txt

# Build the frontend
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# Start both frontend and backend
CMD ["sh", "-c", "npm run start & python backend/manage.py runserver 0.0.0.0:8000"]
