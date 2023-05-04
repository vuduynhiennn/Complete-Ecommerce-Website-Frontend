import { Helmet, HelmetProvider } from 'react-helmet-async';

function Meta(props) {
    const { title } = props
  return (
    <>  
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8"></meta>
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
        
    </>
  )
}

export default Meta