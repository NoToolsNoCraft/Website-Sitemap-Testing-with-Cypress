describe('Sitemap test for HelloWorld.rs', () => {
    const baseUrl = 'https://notoolsnocraft.tech'; // Define the webpage being tested
  
    it('Sitemap main collection', () => {
      // Request the sitemap file
      cy.request(`${baseUrl}/sitemap.xml`)
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

    it('All posts sitemap collection', () => {
        // Request the sitemap file
        cy.request(`${baseUrl}/post-sitemap.xml`)
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

    it('All categories sitemap collection', () => {
        // Request the sitemap file
        cy.request(`${baseUrl}/category-sitemap.xml`)
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

    it('All pages sitemap collection', () => {
        // Request the sitemap file
        cy.request(`${baseUrl}/page-sitemap.xml`)
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
