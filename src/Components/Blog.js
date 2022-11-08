import React from 'react';

const Blog = () => {
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <h2 className='max-w-lg text-center mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
            Todays Questions !!
          </h2>
          <p className='text-base text-center text-gray-700 md:text-lg'>
            Here is our some questions about Course related. Assessment, instruction, and practice that motivate every student to mastery.
          </p>
        </div>
      </div>
      <div className='max-w-screen-xl sm:mx-auto '>
        <div className='grid grid-cols-1 px-10 py-5 mx-auto shadow-lg bg-slate-200  gap-16 row-gap-8 lg:grid-cols-1'>
          <div className='space-y-8 '>
            <div>
              <p className='mb-4 text-2xl font-medium'>
              Difference between SQL and NoSQL
              </p>
              <p className='text-gray-700'>
              
              1. SQL databases are relational, NoSQL databases are non-relational. <br />
              2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
              3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
              4.  SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
              5.  SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.

                <br />
                <br />
                Here, we break down the most important distinctions and discuss the best SQL and NoSQL database systems available.
              </p>
            </div>
            <div>
              <p className='mb-4 text-2xl font-medium'>
              What is JWT, and how does it work?
              </p>
              <p className='text-gray-700'>
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. <br />
                It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.
                <br />
                <br />
                How does ut work? : Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
              </p>
            </div>
            <div>
              <p className='mb-4 text-2xl font-medium'>
              What is the difference between javascript and NodeJS?
              </p>
              <p className='text-gray-700'>
              JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful. <br /> <br />
           
              </p>
            </div>
            <div>
              <p className='mb-4 text-2xl font-medium'>
              How does NodeJS handle multiple requests at the same time?
              </p>
              <p className='text-gray-700'>
              NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    );
};

export default Blog;