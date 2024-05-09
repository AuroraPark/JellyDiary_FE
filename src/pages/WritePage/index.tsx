import { useParams } from "react-router-dom";

import WritePageHeader from "./WritePageHeader";
import WritePageItems from "./WritePageItems";
import WritePageDesc from "./WritePageDesc";
import WritePageFooter from "./WritePageFooter";
import AlertModal from "../../components/Modal/AlertModal";
import { useFetchPost } from "../../hooks/usePost.ts";
import { useModalStore } from "../../store/modalStore/modalStore.ts";

import { WritePageContainer, WritePageContent } from "./WritePage.styles.ts";

const WritePage = () => {
  const { imageAlertModal, imgDupliAlertModal, titleAlertModal } =
    useModalStore();
  const { id } = useParams();
  const { isLoading, data, isError, error } = useFetchPost(id as string);

  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error?.message}</>;

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
