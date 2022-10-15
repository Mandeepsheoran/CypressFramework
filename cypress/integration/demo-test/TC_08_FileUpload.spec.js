describe('File Upload', function() {

    it('Browser & single file upload', () => {
      cy.visit('http://127.0.0.1:5500/HelpFolder/fileupload.html')
         cy.get("input#file-upload1").attachFile("image1.jpg")
         cy.get('span#fileName1').should('have.text', 'image1.jpg')
    })

    it('Browser & single file upload-Overwrite attached file', () => {
      cy.visit('http://127.0.0.1:5500/HelpFolder/fileupload.html')
        cy.get("input#file-upload1").attachFile(
            {
            filePath: "image1.jpg",
            fileName: "image2.jpg",
            }
            )
        cy.get('span#fileName1').should('have.text', 'image2.jpg')
   })

   it('Shadom dom - Browser & single file upload', () => {
    cy.visit('http://127.0.0.1:5500/HelpFolder/fileupload.html')
    cy.get('button').click()
    cy.get("input#file-upload2",{includeShadowDom:true,}).attachFile("image1.jpg")
    cy.get('span#fileName2',{includeShadowDom:true,}).should('have.text', 'image1.jpg')
})

it("File Upload - Drag Drop", () => {
    cy.visit("https://css-tricks.com/examples/DragAndDropFileUploading/");
    // cy.get("#file").attachFile("yey.jpg");
    cy.get("#file").attachFile("image1.jpg", { subjectType: "drag-n-drop" });
    cy.contains("Done!").should("be.visible");
  });

  it("Multiple File Upload - Drag Drop", () => {
    cy.visit('http://127.0.0.1:5500/HelpFolder/fileupload.html')
    cy.get("input#file-upload2")
      .attachFile("image1.jpg")
      .attachFile("image2.jpg")
      .attachFile("image1.jpg");
  });

  it("Image File Upload - Drag Drop", () => {
    cy.visit('http://127.0.0.1:5500/HelpFolder/fileupload.html')
    cy.get("div#holder").attachFile("image1.jpg", { subjectType: "drag-n-drop" });
  });
})