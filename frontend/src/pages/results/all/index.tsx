import LOSTITEMS from "@core/lostItemsData";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "@pages/search/components/Footer";
import * as A from "./styles";

export default function index() {
  const navigate = useNavigate();

  return (
    <A.Container>
      <Header title="검색결과" url="/search" />
      <A.Text>검색 결과를 모두 보여드려요.</A.Text>
      <A.FullItems>
        {LOSTITEMS.map((item) => (
          <A.Item type="button" key={item.id} onClick={() => navigate("/found/one")}>
            <A.Image src={item.img} alt={`Lost Item ${item.id}`} />
            <A.Details>
              <A.Title>에어팟 프로</A.Title>
              <A.Small>
                <A.Found>{item.location}</A.Found>
                <Date>{item.date}</Date>
              </A.Small>
              <A.Location>{item.location}</A.Location>
            </A.Details>
          </A.Item>
        ))}
      </A.FullItems>
      <Footer />
    </A.Container>
  );
}
