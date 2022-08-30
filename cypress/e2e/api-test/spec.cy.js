

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('km spec', () => {
  it('passes', () => {
    cy.visit('https://api-test.kommunicate.io/')
  })
})

describe('km1 spec', () => {
  it('passes', () => {
    let url="https://api-test.kommunicate.io/chatplatform/whatsapp/whatsapp-cloud-api/templates/sync"
    let body= {
      "chatPlatformKey": "629efcc73586d9439dd2e5f877"
    }

    cy.request("post", url, body)

  })
})



describe('km2 spec', () => {
  it('passes', () => {
    let path="/chatplatform/whatsapp/whatsapp-cloud-api/templates/sync"
    let body= {
      "chatPlatformKey": "629efcc73586d9439dd2e5f877"
    }
    let options={url:path, body:body,method:"post",log:true}
    
    cy.request(options).should((response) => {
      console.log(response)
      // expect(response.body).to.have.length(500)
      // // expect(response).to.have.property('headers')
      // // expect(response).to.have.property('duration')
    })

  })
})