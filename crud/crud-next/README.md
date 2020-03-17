# Launch instruction

1. Install Node.js
2. Clone this repository: https://github.com/rolling-scopes-school/timary13-ST2019/tree/crud/
3. Go to folder `crud`
4. To install all dependencies use `(cd express && npm i) & (cd ../crud-next && npm i)`
5. Change `MONGO_CONNECTION` variable in `.env` file
6. Run ` cd express && node index.js` in command line to start server from folder `crud`
7. Run ` cd crud-next && npm run dev` in command line to start client from folder `crud`
8. The client-page would open at browser

# Export into static app/page

1. Go to folder `crud-next`
2. Run `npm run build`
3. Run `npm run export`
4. Exported HTML content on a `out` directory
