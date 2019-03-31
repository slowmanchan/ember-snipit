export default function() {
  this.namespace = '/api';
  let snippets = [{
    type: 'snippets',
    id: '1',
    attributes: {
      code: `func main() error {
  return "hello world"
}`,
      language: 'go',
    }
  }]

  this.get('/snippets', () => {
    return {
       data: snippets
    }
  })
}
