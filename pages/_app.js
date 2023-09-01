import React from 'react';
import "../css/common.css"
export default function App({ Component, pageProps }) {
      return (<>
            <Component {...pageProps} />
      </>
      );
}