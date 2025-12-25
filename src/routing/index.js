const useRoute = (app) => {
  app.use('/', (req, res, next) => res.send(123));
};

module.exports = useRoute;
