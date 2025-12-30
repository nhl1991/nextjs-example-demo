'use client'

import ComputedStyle from "@/src/components/Box-Sizing/computedStyle";





export default function Home() {

  

  return (
    <div className="min-h-screen p-2 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="border-1 rounded border-dotted w-full p-4 relative box-content">
        <div>
          <h1 className="text-5xl my-4 font-bold">BOX-SIZING</h1>
          <p>CSS 박스 모델의 기본값에서, 지정한 너비와 높이는 요소의 콘텐츠 박스 크기에만 적용됩니다. <b>요소에 테두리(border)나 안쪽 여백(padding)이 있으면 너비와 높이에 더해서 화면에 그립니다.</b> 따라서 크기를 설정할 때, 원하는 크기를 얻으려면 테두리나 안쪽 여백을 고려해야 합니다.</p>
        </div>
        <div className="w-full h-96 border-2 rounded border-dotted p-8 text-sm">
          <p>All the boxes are set to &apos;128px&lsqou;8rem&rsqou;&apos;.</p>
          <div className="w-32 h-32 border-2 p-4 m-4  rounded border-dotted inline-block box-border bg-blue-300">
            BOX-BORDER
          </div>
          <div className="w-32 h-32 border-2 p-4 m-8 rounded border-dotted inline-block box-border absolute">
            BOX-BORDER
          </div>
          <div className="w-32 h-32 border-2 p-4 m-4 rounded border-dotted inline-block box-content absolute">
            <p className="relative top-32 text-xs">BOX-CONTENT</p>
          </div>
        </div>
        <div>
          <p className="p-4">box-sizing 속성을 사용해 이 방식을 바꿀 수 있습니다.</p>


          <div className="flex">
            <div className="w-1/2 h-full p-4 m-4 border-2 border-dotted">
              <p className="h-20">
                <b>content-box</b>
                는 기본 CSS 박스 크기 결정법을 사용합니다. 요소의 너비를 100 픽셀로 설정하면 콘텐츠 영역이 100 픽셀 너비를 가지고, 테두리와 안쪽 여백은 이에 더해집니다.
              </p>
              <div className="w-full my-6">
                <ComputedStyle box_sizing="content" />
              </div>
            </div>
            <div className="w-1/2 h-full p-4 m-4 border-2 border-dotted">
              <p className="h-20">
                <b>border-box</b>는 테두리와 안쪽 여백의 크기도 요소의 크기로 고려합니다. 너비를 100 픽셀로 설정하고 테두리와 안쪽 여백을 추가하면, 콘텐츠 영역이 줄어들어 총 너비 100 픽셀을 유지합니다. 대부분의 경우 이 편이 크기를 조절할 때 쉽습니다.</p>
              <div className="w-full my-6">
                <ComputedStyle box_sizing="border" />
              </div>
            </div>
          </div>
        </div>

      </div>

      <footer className="w-full flex p-4">
        <ul>
          <li>
            <a href='https://www.w3schools.com/css/css3_box-sizing.asp'>https://www.w3schools.com/css/css3_box-sizing.asp</a>
          </li>
          <li>
            <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing'>https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
