/** @format */

let users = JSON.parse(localStorage.getItem("users")) || [];

export function configureMockBackend() {
  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    const { method, headers } = opts;
    const body = opts.body && JSON.parse(opts.body);

    return Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(handleRoute, 500);
      function handleRoute() {
        switch (true) {
          case url.endsWith("/user/authenticate") && method === "POST":
            return authenticate();
          case url.endsWith("/user/register") && method === "POST":
            return register();
          case url.endsWith("/users") && method === "GET":
            return getUsers();
          default:
            return realFetch(url, opts)
              .then(response => resolve(response))
              .catch(error => reject(error));
        }
      }
      //Login
      function authenticate() {
        const { email, password } = body;
        const user = users.find(
          x => x.email === email && x.password === password
        );
        if (!user) return error("Email or password is incorrect");

        return ok({
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          token: "fake-jwt-token",
        });
      }
      //register or signup
      function register() {
        const user = body;
        if (users.find(x => x.email === user.email)) {
          return error(`Email ${user.email} is already exists`);
        }

        //assign user id and saving to localstorage
        user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        return ok();
      }

      function getUsers() {
        if (!isLoggedIn()) return unauthorized();

        return ok(users);
      }

      //helper functions
      function ok(body) {
        resolve({
          ok: true,
          text: () => Promise.resolve(JSON.stringify(body)),
        });
      }

      function unauthorized() {
        resolve({
          status: 401,
          text: () =>
            Promise.resolve(JSON.stringify({ message: "Unauthorized" })),
        });
      }
      function error(message) {
        resolve({
          status: 400,
          text: () => Promise.resolve(JSON.stringify({ message })),
        });
      }

      function isLoggedIn() {
        return headers["Authorization"] === "Bearer fake-jwt-token";
      }
    });
  };
}
