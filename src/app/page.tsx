
//import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight, Code, Flag, Globe, MessageSquare, Phone, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import logo from "@/public/logo-hyperhire.png";
import profile from "@/public/profileImage.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const profiles = [
  {
    name: "Abhishek Gupta",
    role: "마케팅",
    experience: "2년",
    skills: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글 작성"],
    subtitle: "마케팅 · 2y+",
    image: profile,
  },
  {
    name: "Sarah Johnson",
    role: "개발자",
    experience: "5년",
    skills: ["React", "Node.js", "Python", "AWS"],subtitle: "마케팅 · 2y+",
    image: profile,
  },
  {
    name: "Yuki Tanaka",
    role: "디자이너",
    experience: "3년",
    skills: ["UI/UX 디자인", "Figma", "Adobe XD", "Illustration"],subtitle: "마케팅 · 2y+",
    image: profile,
  },
]


const buttons = [
  { icon: Globe, text: "해외 마케팅" },
  { icon: MessageSquare, text: "퍼블리셔" },
  { icon: Globe, text: "캐드원(제도사)" },
  { icon: Globe, text: "해외 세일즈" },
  { icon: Phone, text: "상담원" },
  { icon: Globe, text: "해외 마케팅" },
  { icon: MessageSquare, text: "퍼블리셔" },
  { icon: Globe, text: "캐드원(제도사)" },
  { icon: Globe, text: "해외 세일즈" },
  { icon: Phone, text: "상담원" },
  { icon: Globe, text: "해외 마케팅" },
  { icon: MessageSquare, text: "퍼블리셔" },
  { icon: Globe, text: "캐드원(제도사)" },
  { icon: Globe, text: "해외 세일즈" },
  { icon: Phone, text: "상담원" },
]

const cards = [
  {
    icon: <Code className="w-6 h-6 text-gray-600" />,
    title: "해외 개발자 원격 채용",
    link: "바로가기",
  },
  {
    icon: <User className="w-6 h-6 text-gray-600" />,
    title: "외국인 원격 채용 (비개발)",
    link: "바로가기",
  },
  {
    icon: (
      <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-semibold text-gray-600">
        KOR
      </div>
    ),
    title: "한국어 가능 외국인 채용",
    link: "바로가기",
  },
  {
    icon: <Settings className="w-6 h-6 text-gray-600" />,
    title: "해외 개발자 활용 서비스",
    link: "바로가기",
  },
]

export default function AComponent() {


  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-500 to-blue-600 text-white">
      <header className="p-4 flex justify-between items-center">
        <Image src={logo} alt="hyperhire logo" width={120} height={40} />
        <nav className="hidden md:flex items-center space-x-4">
          <select className="bg-transparent border-none text-white">
            <option>채용</option>
          </select>
          <span>해외 개발자 활용 서비스</span>
          <Button variant="outline" className="text-blue-500 border-white">
            문의하기
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
          <div className="max-w-2xl mb-8 md:mb-0">
            <div className="inline-block bg-white/20 text-sm px-3 py-1 rounded-full mb-4">
              풀타임, 파트타임
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center md:text-left">
              최고의 실력을 가진
              <br />
              외국인 인재를 찾고 계신가요?
            </h1>
            <p className="mb-4 text-center md:text-left">
              법률 및 인사관리 부담없이
              <br />
              1주일 이내에 원격으로 채용해보세요.
            </p>
            <p className="text-sm mb-8 text-center md:text-left">개발자가 필요하신가요?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="font-bold">평균 월 120만원</h3>
                <p className="text-sm">업계 최저 국가별 기준으로 제안합니다.</p>
              </div>
              <div>
                <h3 className="font-bold">최대 3회 인력교체</h3>
                <p className="text-sm">만약 적응하지 못한 경우 이도 적용하지 마세요.</p>
              </div>
              <div>
                <h3 className="font-bold">평균 3일, 최대 10일</h3>
                <p className="text-sm">금방에 사람이 필요한 경우 우에도 빠른 채용이 가능합니다.</p>
              </div>
            </div>
          </div>
          <div className="relative w-full md:w-auto">
            {/* <div className="absolute -top-6 -left-6 bg-white text-teal-500 px-3 py-1 rounded-full text-sm font-bold z-10">
              월 100만원
            </div> */}
            <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-xs mx-auto"
      >
        <CarouselContent>
          {profiles.map((profile, index) => (
            <CarouselItem key={index} className="md:basis-4/5 lg:basis-3/4">
              <Card className="bg-white rounded-2xl shadow-lg">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="relative mb-4">
                    <Image
                      src={profile.image}
                      alt={profile.name}
                      className="w-24 h-24 rounded-full"
                    />
                    <Flag className="absolute bottom-0 right-0 w-6 h-6 text-yellow-400 stroke-2" />
                  </div>
                  <h2 className="text-2xl font-bold mb-1">{profile.name}</h2>
                  <p className="text-blue-500 mb-4">{profile.subtitle}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {profile.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-black" />
        <CarouselNext  className="text-black"/>
      </Carousel>
          </div>
        </div>
       
	      <Carousel className="w-full max-w-xl mx-auto">
          <CarouselContent>
            {buttons.map((button, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                <div className="p-1">
                  <Button variant="secondary" className="w-full text-teal-500 bg-white hover:bg-gray-100">
                    <button.icon className="mr-2 h-4 w-4" />
                    {button.text}
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black"  />
          <CarouselNext className="text-black"  />
        </Carousel>
      </main>

      <footer className="bg-white text-gray-600 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-8 md:mb-0">
              <Image src={logo} alt="hyperhire logo" width={120} height={40} className="mb-4" />
              <p className="text-sm mb-2">우리는 국가와 장벽을 넘어 최고의 인재를 찾습니다.</p>
              <p className="text-sm">010-0000-0000</p>
              <p className="text-sm">aaaaa@naver.com</p>
            </div>

              <div className="flex flex-wrap justify-center gap-4 p-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-lg p-4 w-[calc(50%-0.5rem)] sm:w-[calc(25%-0.75rem)] flex flex-col items-start space-y-2"
        >
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            {card.icon}
          </div>
          <h3 className="text-sm font-medium text-gray-900 leading-tight min-h-[2.5rem]">
            {card.title}
          </h3>
          <div className="flex items-center text-sm text-gray-600">
            <span>{card.link}</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      ))}
    </div>

          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <p>상호명</p>
                <p>하이어히어이어</p>
                <p>Hyperhire India Private Limited</p>
              </div>
              <div>
                <p>대표 CEO</p>
                <p>김주현</p>
                <p>Juhyun Kim</p>
              </div>
              <div>
                <p>사업자등록번호 CIN</p>
                <p>427-86-01197</p>
                <p>U74110DL2018FTC330812</p>
              </div>
              <div>
                <p>주소 ADDRESS</p>
                <p>서울특별시 강남대로 479, 7층(역삼동 238호)</p>
                <p>D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India</p>
              </div>
            </div>
          </div>
          <p className="text-center mt-8">© 2023 Hyperhire</p>
        </div>
      </footer>
    </div>
  
)
}
