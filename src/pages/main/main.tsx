import { images } from '~/constants';
import "~/pages/home/Home.css"


export default function HomePage() {
  return (
    <div className="app_logo">
      <img src={images.icon_main} alt="Logo" />
    </div>
  )
}