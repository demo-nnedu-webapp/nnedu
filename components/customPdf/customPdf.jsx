import React from "react";
import ReactPDF from "@react-pdf/renderer";
import NNSSLOGO from "../../assets/logo.png";
import {
  Document,
  Image,
  StyleSheet,
  Page,
  View,
  Text,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  viewer: {
    paddingTop: 32,
    width: "100%",
    height: "80vh",
    border: "none",
  },
  page: {
    display: "flex",
    padding: "0.4in 0.4in",
    fontSize: 12,
    color: "#333",
    backgroundColor: "#fff",
  },
});

function ReceiptPDF() {
  return (
    <>
      <PDFViewer style={styles.viewer}>
        <Document>
          <Page style={styles.page} size="A4">
            <View>
              <Image
                src={NNSSLOGO}
                style={{ width: "120px", height: "auto" }}
              />
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
}

export default ReceiptPDF;
