import { WritePageContainer, WritePageContent } from "./WritePage.styles.ts";
import WritePageHeader from "./WritePageHeader/WritePageHeader.tsx";
import WritePageItems from "./WritePageItems/WritePageItems.tsx";
import WritePageDesc from "./WritePageDesc/WritePageDesc.tsx";
import WritePageFooter from "./WritePageFooter/WritePageFooter.tsx";
import AlertModal from "../../components/Modal/AlertModal/AlertModal.tsx";
import { useModalStore } from "../../store/modalStore/modalStore.ts";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const WritePage = () => {
  const { imageAlertModal, imgDupliAlertModal, titleAlertModal } =
    useModalStore();
  const { id } = useParams();
  const { isLoading, data, isError } = useQuery(
    "fetch-post",
    () => {
      return axios.get(`edit/${id}`);
    },
    {
      select: (data) => data.data[0],
    },
  );
  if (isLoading) return <>Loading...</>;
  if (isError) return <>데이터를 불러오는데 실패하였습니다.</>;

  return (
    <WritePageContainer>
      <WritePageContent>
        {imageAlertModal && (
          <AlertModal type={"imageAlert"}>
            이미지는 최대 5개까지 업로드 할 수 있습니다.
          </AlertModal>
        )}
        {imgDupliAlertModal && (
          <AlertModal type={"duplication"}>
            이미 업로드한 이미지 입니다.
          </AlertModal>
        )}
        {titleAlertModal && (
          <AlertModal type={"titleAlert"}>제목을 입력해 주세요.</AlertModal>
        )}
        <WritePageHeader
          title={data ? "일지 수정하기" : "일지 작성하기"}
          data={data}
        />
        <WritePageItems data={data} />
        <WritePageDesc data={data} />
        <WritePageFooter data={data} />
      </WritePageContent>
    </WritePageContainer>
  );
};

export default WritePage;
