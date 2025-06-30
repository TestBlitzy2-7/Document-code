/**
 * @fileoverview Simple HTTP server implementation using Node.js built-in http module.
 * 
 * This server demonstrates basic HTTP server functionality by creating a minimal
 * web server that responds to all requests with a "Hello, World!" message.
 * The server utilizes Node.js's http module to handle HTTP requests and responses,
 * making it suitable for learning purposes and as a foundation for more complex
 * web applications.
 * 
 * @author Blitzy Agent
 * @version 1.0.0
 * @since 1.0.0
 */

const http = require('http');

/**
 * Server hostname configuration.
 * 
 * Specifies the IP address on which the server will listen for incoming
 * connections. Using '127.0.0.1' (localhost) restricts access to the local
 * machine only, providing security for development environments.
 * 
 * @constant {string}
 * @default '127.0.0.1'
 * @example
 * // For production, you might use:
 * // const hostname = '0.0.0.0'; // Listen on all network interfaces
 * // const hostname = 'example.com'; // Listen on specific domain
 */
const hostname = '127.0.0.1';

/**
 * Server port configuration.
 * 
 * Defines the port number on which the HTTP server will listen for incoming
 * requests. Port 3000 is commonly used for development servers as it's above
 * the reserved port range (0-1023) and doesn't require elevated privileges.
 * 
 * @constant {number}
 * @default 3000
 * @example
 * // Common development ports:
 * // const port = 3000; // Node.js default
 * // const port = 8000; // Alternative development port
 * // const port = process.env.PORT || 3000; // Production with fallback
 */
const port = 3000;

/**
 * HTTP server instance created using Node.js http module.
 * 
 * Creates a new HTTP server that listens for incoming requests and responds
 * with a simple "Hello, World!" message. The server is configured to handle
 * all HTTP methods and routes with the same response.
 * 
 * @type {http.Server}
 * @example
 * // Server will respond to all requests with "Hello, World!"
 * // GET http://127.0.0.1:3000/ -> "Hello, World!"
 * // POST http://127.0.0.1:3000/any-path -> "Hello, World!"
 */
const server = http.createServer(
  /**
   * HTTP request handler callback function.
   * 
   * Processes incoming HTTP requests and sends a standardized response.
   * This handler is invoked for every HTTP request received by the server,
   * regardless of the request method (GET, POST, etc.) or URL path.
   * 
   * @param {http.IncomingMessage} req - The HTTP request object containing
   *   request details such as headers, method, URL, and body data
   * @param {http.ServerResponse} res - The HTTP response object used to
   *   send the response back to the client
   * @returns {void} This function doesn't return a value; it sends the response
   *   through the res object
   * 
   * @example
   * // Example of what this handler does for any request:
   * // 1. Sets HTTP status code to 200 (OK)
   * // 2. Sets Content-Type header to 'text/plain'
   * // 3. Sends "Hello, World!\n" as response body
   * // 4. Ends the response
   */
  (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
  }
);

/**
 * Start the HTTP server and begin listening for connections.
 * 
 * Binds the server to the specified hostname and port, making it ready to
 * accept incoming HTTP requests. Once the server successfully starts listening,
 * a callback function is executed to confirm the server is running.
 * 
 * @method listen
 * @param {number} port - The port number on which the server will listen (3000)
 * @param {string} hostname - The hostname or IP address to bind to ('127.0.0.1')
 * @param {Function} callback - Callback function executed when server starts listening
 * @returns {http.Server} Returns the server instance for method chaining
 * 
 * @example
 * // Server will start listening and log a confirmation message:
 * // "Server running at http://127.0.0.1:3000/"
 * // 
 * // To test the server, open a web browser or use curl:
 * // curl http://127.0.0.1:3000/
 * // 
 * // Expected response: "Hello, World!"
 */
server.listen(port, hostname, 
  /**
   * Server startup callback function.
   * 
   * Executed when the server successfully starts listening on the specified
   * port and hostname. Provides confirmation that the server is ready to
   * accept incoming HTTP requests.
   * 
   * @callback ServerStartupCallback
   * @returns {void} This function doesn't return a value; it logs server status
   * 
   * @example
   * // Console output when server starts:
   * // "Server running at http://127.0.0.1:3000/"
   */
  () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  }
);
