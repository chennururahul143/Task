// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <>
//     </>
//   );
// }

// export default App;


// import React from 'react';
// import Login from './Login';

// const App = () => {
//   return (
//     <div className="App">
//       <Login />
//     </div>
//   );
// };

// export default App;


// import React from 'react';
// import ContactList from './ContactList';
// import './ContactList.css';

// const App = () => {
//   const contacts = [
//     {
//       name: 'John Doe',
//       photo: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
//     },
//     {
//       name: 'Jane Smith',
//       photo: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
//     },
//     {
//       name: 'John Doe',
//       photo: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
//     },
//     {
//       name: 'Jane Smith',
//       photo: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
//     },
//     {
//       name: 'John Doe',
//       photo: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
//     },
//     {
//       name: 'Jane Smith',
//       photo: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
//     },
//     {
//       name: 'John Doe',
//       photo: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
//     },
//     {
//       name: 'Jane Smith',
//       photo: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
//     },
//     {
//       name: 'John Doe',
//       photo: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
//     },
//     {
//       name: 'Jane Smith',
//       photo: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
//     },

//     {
//       name: 'John Doe',
//       photo: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
//     },
//     {
//       name: 'Jane Smith',
//       photo: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
//     },
//     {
//       name: 'John Doe',
//       photo: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
//     },
//     {
//       name: 'Jane Smith',
//       photo: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
//     },
//     {
//       name: 'John Doe',
//       photo: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
//     },
//     {
//       name: 'Jane Smith',
//       photo: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
//     },
//     // Add more contacts here
//   ];

//   return (
//     <div>
//       <h1>My Contacts</h1>
//       <ContactList contacts={contacts} />
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import ContactList from './ContactList';
import './ContactList.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchContacts = () => {
      setLoading(true);
      setTimeout(() => {
        const initialContacts = [
          {
            name: 'John Doe',
            photo: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
          },
          {
            name: 'Jane Smith',
            photo: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
          },
          {
            name: 'John Doe',
            photo: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
          },
          {
            name: 'Jane Smith',
            photo: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
          },
          {
            name: 'John Doe',
            photo: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
          },
          {
            name: 'Jane Smith',
            photo: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
          },
          {
            name: 'John Doe',
            photo: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
          },
          {
            name: 'Jane Smith',
            photo: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
          },
          {
            name: 'John Doe',
            photo: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
          },
          {
            name: 'Jane Smith',
            photo: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
          },
          {
            name: 'John Doe',
            photo: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
          },
          {
            name: 'Jane Smith',
            photo: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
          },
          {
            name: 'John Doe',
            photo: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
          },
          {
            name: 'Jane Smith',
            photo: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
          },
          {
            name: 'John Doe',
            photo: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
          },
          {
            name: 'Jane Smith',
            photo: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
          },
        ];
        setContacts(initialContacts);
        setLoading(false);
      }, 1800); 
    };

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        fetchContacts();
      }
    };

    fetchContacts(); 

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>My Contacts</h1>
      <ContactList contacts={contacts} />
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default App;



