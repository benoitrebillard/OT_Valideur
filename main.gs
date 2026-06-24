// =========================================================================
// CRÉATION DU MENU DANS GOOGLE SHEETS
// =========================================================================
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('🛠️ Import Onaya')
      .addItem('📅 Ouvrir le panneau d\'importation', 'afficherInterface')
      .addToUi();
}
