import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "./photos";

export default function App() {
  return (
      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={250}
        rowConstraints={{
          singleRowMaxHeight: 350,
        }}
        render={{
          photo: (_, context) => {

            console.log('width height', context.width, context.height);
           
            return null
          },
        }}
      />
  );
}
