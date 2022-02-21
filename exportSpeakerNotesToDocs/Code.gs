function exportSpeakerNotesToDocs() {
  const title = SlidesApp.getActivePresentation().getName();

  const contents = SlidesApp.getActivePresentation()
    .getSlides()
    .map((slide) =>
      slide.getNotesPage().getSpeakerNotesShape().getText().asString()
    );

  const doc = DocumentApp.create(title);
  const body = doc.getBody();
  contents.forEach((content, i) => {
    body
      .appendParagraph(`Page ${i + 1}`)
      .setHeading(DocumentApp.ParagraphHeading.HEADING2);
    body.appendParagraph(content);
  });
  doc.saveAndClose();
}
