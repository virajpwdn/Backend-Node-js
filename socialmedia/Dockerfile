FROM node:20.18.0-alpine3.19 as base

# Stage 1: Build from source code
FROM base AS builder

WORKDIR /home/build

COPY package* .

RUN npm install

COPY src/ src/

RUN npm run build


# Stage 2: Run from above built code -> Here we will select files that we want from above built code
FROM base AS runner

WORKDIR /home/app

COPY --from=builder /home/build/dist dist/
COPY --from=builder /home/build/package*.json .

RUN npm install --omit=dev

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system -uid 1001 nodejs

USER nodejs

EXPOSE 8000
ENV PORT=8000

CMD [ "npm", "run", "dev" ]