import { PostPageContainer, PostPageContent } from "./PostPage.styles.ts";
import PostPageHeader from "./PostPageHeader/PostPageHeader.tsx";
import PostPageDetail from "./PostPageDetail/PostPageDetail.tsx";
import PostPageDiary from "./PostPageDiary/PostPageDiary.tsx";
import CommentModal from "../../components/Modal/CommentModal/CommentModal.tsx";
import { useState } from "react";

const PostPage = () => {
  const [toggleCommentModal, setToggleCommentModal] = useState(false);
  return (
    <PostPageContainer>
      <PostPageContent>
        <PostPageHeader />
        <PostPageDetail setToggleCommentModal={setToggleCommentModal} />
        <PostPageDiary />
      </PostPageContent>
      {toggleCommentModal && <CommentModal />}
    </PostPageContainer>
  );
};

export default PostPage;