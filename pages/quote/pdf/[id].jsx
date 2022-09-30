import { useEffect } from "react";
import QuotePdf from "../../../components/QuotePdf";

export default function Quote(props) {
  return <QuotePdf quote={props.quote} />;
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const quote = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/quote/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json.data.quote;
    });

  return { props: { quote } };
}
