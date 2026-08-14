/**
 * Google Apps Script endpoint for the wedding RSVP form.
 *
 * Sheet columns:
 * Timestamp | Name | Guests | Attendance | Notes
 *
 * IMPORTANT:
 * 1) Create a Google Sheet.
 * 2) Open Extensions > Apps Script.
 * 3) Paste this file.
 * 4) Replace SHEET_ID with your spreadsheet ID.
 * 5) Deploy as Web app.
 */

const SHEET_ID = "1m34ATjIpYM2cB2PZ6GTtpoiXhWmKpIi6g3cAObdFzX8";
const SHEET_NAME = "RSVP";

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ ok: false, error: "Missing request body." });
    }

    const body = JSON.parse(e.postData.contents);

    const name = String(body.name || "").trim();
    const guests = Number(body.guests);
    const attendance = String(body.attendance || "").trim();
    const notes = String(body.notes || "").trim();

    if (!name) {
      return jsonResponse({ ok: false, error: "Name is required." });
    }

    if (!Number.isInteger(guests) || guests < 1 || guests > 150) {
      return jsonResponse({ ok: false, error: "Guests must be between 1 and 150." });
    }

    if (!attendance) {
      return jsonResponse({ ok: false, error: "Attendance is required." });
    }

    if (name.length > 120) {
      return jsonResponse({ ok: false, error: "Name is too long." });
    }

    if (notes.length > 1000) {
      return jsonResponse({ ok: false, error: "Notes are too long." });
    }

    const allowedAttendance = [
      "نعم، بكل سرور ❤️",
      "للأسف لن أتمكن من الحضور"
    ];

    if (!allowedAttendance.includes(attendance)) {
      return jsonResponse({ ok: false, error: "Invalid attendance value." });
    }

    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      sheet.appendRow(["تاريخ ووقت التأكيد", "الاسم", "عدد الأشخاص", "حالة الحضور", "الملاحظات"]);
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(),
      name,
      guests,
      attendance,
      notes
    ]);

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse({
      ok: false,
      error: "Server error."
    });
  }
}

function doGet() {
  return jsonResponse({
    ok: true,
    service: "Wedding RSVP endpoint"
  });
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
