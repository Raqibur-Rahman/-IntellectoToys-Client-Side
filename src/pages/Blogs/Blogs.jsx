const Blogs = () => {
    return (
        <div>
            <h3 className="font-bold m-5 p-3 lg:text-3xl text-center">Demystifying Access Tokens, Databases, Frameworks, and Aggregation: A Comprehensive Overview</h3>
            <div className="m-5 p-3 bg-slate-300 rounded">
                <h3 className="font-bold p-3">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h3>
                <p className="p-3">
                    An access token is like a key that allows a client (an app or user) to access certain protected resources. It is given by a server after successful authentication and is used to prove that the client has permission to access those resources. Access tokens are short-lived and have an expiration time. <br /><br /> 

                    A refresh token is also given by the server during authentication. It is a long-lived token that can be used to get a new access token when the current one expires. This means the user does not have to log in again every time the access token expires. <br /><br /> 

                    On the client-side, access tokens and refresh tokens should be stored securely. In web apps, they can be stored in secure cookies. In mobile apps, they should be stored in secure storage provided by the operating system. In single-page apps, they can be stored in browser storage, but extra security measures need to be taken to prevent unauthorized access. <br />

                </p>
            </div>


            <div className="m-5 p-3 bg-slate-300 rounded">
                <h3 className="font-bold p-3">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h3>
                <p className="p-3">
                    <p className="font-bold">SQL Databases:</p>
                    SQL databases, also known as relational databases, store structured data in tables with predefined schemas. <br />
                    They use structured query language (SQL) for defining and manipulating the data. <br />
                    SQL databases ensure data integrity through constraints and support complex queries and joins. <br />
                    They are suitable for structured data and well-defined relationships, making them reliable for transactional systems and complex data modeling. <br />
                    Examples: MySQL, PostgreSQL, Oracle. <br /> <br /> 

                    <p className="font-bold">NoSQL Databases::</p>

                    NoSQL databases, also known as non-relational databases, store unstructured or semi-structured data without a fixed schema. <br />
                    They offer flexible schemas and can handle large volumes of data, making them scalable and efficient for big data applications. <br />
                    NoSQL databases often use different data models like key-value pairs, documents, columnar, or graphs. <br />
                    They prioritize horizontal scalability and high-performance operations. <br />
                    They are suitable for handling unstructured data, rapid development, and distributed systems. <br />
                    Examples: MongoDB <br />

                    <p>In summary, SQL databases are suitable for structured data and complex relationships while NoSQL databases are more flexible, scalable, and efficient for handling unstructured or semi-structured data in big data or distributed systems.</p>

                </p>
            </div>


            <div className="m-5 p-3 bg-slate-300 rounded">
                <h3 className="font-bold p-3">
                    What is express js? What is Nest JS
                </h3>
                <p className="p-3">
                    <span className="font-bold">Express.js</span> is a minimalistic and flexible web application framework for Node.js. It provides a simple and straightforward way to build web applications and APIs. Express.js offers a set of features for routing, handling requests and responses, middleware support, and integrating with various templating engines. It is widely used and has a large ecosystem of plugins and libraries available. <br /> <br />

                    <span className="font-bold">NestJS</span> is a progressive, TypeScript-based web application framework for building scalable and maintainable server-side applications. It is built on top of Express.js and enhances it with additional features and architectural patterns inspired by Angular. NestJS follows the modular and dependency injection principles, making it easy to organize code into modules and promote code reusability. It provides features like decorators, dependency injection, middleware, and more. NestJS is commonly used to build robust, enterprise-level applications.

                </p>
            </div>


            <div className="m-5 p-3 bg-slate-300 rounded">
                <h3 className="font-bold p-3">
                    What is MongoDB aggregate and how does it work?
                </h3>
                <p className="p-3">
                    MongoDB aggregate is a powerful framework that enables you to perform advanced data processing and analysis on your MongoDB collections. By defining a pipeline of stages, you can perform operations like filtering, grouping, sorting, and aggregating the data to extract meaningful insights and transform your data as needed.<br /> <br />

                    It works by processing and transforming data in a collection.
                    Aggregation is performed using a pipeline, which consists of multiple stages chained together.
                    Each stage in the pipeline performs a specific operation on the data and passes the results to the next stage.
                    The order of the stages in the pipeline determines the sequence of operations. <br />

                </p>
            </div>

        </div>
    );
};

export default Blogs;