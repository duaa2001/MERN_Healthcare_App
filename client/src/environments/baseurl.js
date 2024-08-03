
export function getBaseUrl () {
    if(process.env.NODE_ENV === 'development') {
        return 'http://localhost:5001'
      } else {
        return 'https://healthcare-server-six.vercel.app'
      }
}