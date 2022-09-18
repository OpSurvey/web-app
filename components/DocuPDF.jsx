import React, { useState, useEffect } from "react";
import { Page, Document, View, Text } from "react-pdf";

export default function DocuPDf() {
  const [quote, setQuote] = useState({});

  function fetchQuote() {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => {
        setQuote(json);
      });
  }
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Document>
      <Page size="A4">
        <View className="overflow-x-auto relative" id="content">
          <View style={styles.table}>
          <View style={[styles.row, styles.header]}>
              <Text style={[styles.headerText, styles.cell]}>Column 1 Header</Text>
              <Text style={[styles.headerText, styles.cell]}>Column 2 Header</Text>
              <Text style={[styles.headerText, styles.cell]}>Column 3 Header</Text>
              <Text style={[styles.headerText, styles.cell]}>Column 4 Header</Text>
          </View>
          <View style={[styles.row]}>
            <Text style={[styles.cell]}>{quote ? quote.title : "..."}</Text>
            <Text style={[styles.cell]}>{!quote ? "...loading" : quote.description}</Text>
            <Text style={[styles.cell]}>{!quote ? "..." : quote.category}</Text>
            <Text style={[styles.cell]}>{!quote ? "..." : quote.price}</Text>
          </View>
    </View>

        </View>
      </Page>
    </Document>
  );
}
