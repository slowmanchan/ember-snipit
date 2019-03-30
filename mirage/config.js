export default function() {
  this.namespace = '/api';
  let snippets = [{
    type: 'snippets',
    id: '1',
    attributes: {
      code: "sdf"
    }
  }]

  this.get('/snippets', () => {
    return {
       data: snippets
    }
  })
}
