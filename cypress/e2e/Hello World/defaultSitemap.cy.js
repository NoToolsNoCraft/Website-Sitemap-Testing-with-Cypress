describe('Sitemap test for HelloWorld.rs', () => {
    const baseUrl = 'https://www.helloworld.rs'; // Define the webpage being tested
  
    it('/sitemap/sitemap-default.xml', () => {
      // Request the sitemap file
      cy.request(`${baseUrl}/sitemap/sitemap-default.xml`)
        .its('body')  // Get the response body (XML content)
        .then((body) => {
          // Parse the XML response body
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(body, 'text/xml');
          
          // Extract all URLs from the <loc> tags
          const urls = Array.from(xmlDoc.getElementsByTagName('loc')).map((loc) => loc.textContent);
  
          // Assert that there are more than 1 URL
          expect(urls).to.have.length.greaterThan(1);
  
          // Visit each URL in the extracted URLs list
          urls.forEach((url) => {
            cy.log(url);  // Log each URL for inspection
            cy.request(url).wait(1000, { log: false });  // Visit each URL with a wait
          });
        });
    });
  });