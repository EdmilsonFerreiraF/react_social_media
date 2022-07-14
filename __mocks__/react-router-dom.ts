module.exports = {
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn().mockReturnValue({ username: "user_username2" }),
};