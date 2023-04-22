import React from 'react'
import Navigation from '../navigation/Navigation'

const Layout = (props) => {
    return (
      <>
      <Navigation/>
        <main className="relative h-screen bg-gray-100 dark:bg-gray-800">
          <div className="flex items-start justify-between">
            <div className="flex flex-col w-full md:space-y-4">
              <div className="h-screen px-4 pb-24 overflow-auto md:px-6 my-5">
                {props.children}
              </div>
            </div>
          </div>
        </main>
      </>
    );
  };

export default Layout