
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Search, 
  Trophy, 
  Star, 
  Clock, 
  MessageCircle, 
  Shield, 
  Gamepad2,
  Filter,
  Heart,
  X,
  Check
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedTier, setSelectedTier] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const { toast } = useToast();

  const tiers = ["브론즈", "실버", "골드", "플래티넘", "다이아몬드", "마스터", "그랜드마스터", "챌린저"];
  const positions = ["탑", "정글", "미드", "원딜", "서포터"];
  const timeSlots = ["오전 (09-12시)", "오후 (12-18시)", "저녁 (18-22시)", "새벽 (22-02시)"];

  const mockUsers = [
    {
      id: 1,
      name: "탑라이너김씨",
      tier: "골드 II",
      position: "탑",
      kda: "2.8",
      winRate: 65,
      manner: "매너 좋음",
      playtime: "저녁",
      tags: ["욕설 금지", "음성 가능", "진지한 플레이"]
    },
    {
      id: 2,
      name: "정글러박씨",
      tier: "골드 III", 
      position: "정글",
      kda: "3.2",
      winRate: 58,
      manner: "친근함",
      playtime: "저녁",
      tags: ["재미있게", "음성 선택", "랭크 위주"]
    },
    {
      id: 3,
      name: "서포터이씨",
      tier: "골드 I",
      position: "서포터",
      kda: "1.9",
      winRate: 72,
      manner: "침착함",
      playtime: "저녁",
      tags: ["매너 중시", "음성 필수", "장기 듀오"]
    }
  ];

  const handleMatchRequest = (userId: number, userName: string) => {
    toast({
      title: "매칭 요청 전송",
      description: `${userName}님에게 듀오 요청을 보냈습니다!`,
    });
  };

  const handleAcceptRequest = (userName: string) => {
    toast({
      title: "매칭 성사! 🎉",
      description: `${userName}님과의 듀오가 성사되었습니다. 디스코드로 연결됩니다.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Gamepad2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800 tracking-tight">LoL 듀오 매칭</h1>
                <p className="text-sm text-gray-500">완벽한 듀오 파트너를 찾아보세요</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-gray-800 font-medium">김훌라</div>
                <div className="text-sm text-gray-500">브론즈 II</div>
              </div>
              <Avatar className="ring-2 ring-blue-100">
                <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-400 text-white font-semibold">김</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-8 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/60 backdrop-blur-sm rounded-2xl p-2 shadow-sm border border-gray-100">
            <TabsTrigger 
              value="dashboard" 
              className="text-gray-600 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm rounded-xl font-medium transition-all"
            >
              <Trophy className="h-4 w-4 mr-2" />
              대시보드
            </TabsTrigger>
            <TabsTrigger 
              value="search" 
              className="text-gray-600 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm rounded-xl font-medium transition-all"
            >
              <Search className="h-4 w-4 mr-2" />
              매칭 찾기
            </TabsTrigger>
            <TabsTrigger 
              value="requests" 
              className="text-gray-600 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm rounded-xl font-medium transition-all"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              요청함
            </TabsTrigger>
            <TabsTrigger 
              value="profile" 
              className="text-gray-600 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm rounded-xl font-medium transition-all"
            >
              <Users className="h-4 w-4 mr-2" />
              내 프로필
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-8 mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/70 backdrop-blur-sm border-0 rounded-3xl p-2 hover:bg-white/80 transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-blue-600">
                    <div className="w-10 h-10 bg-blue-100 rounded-2xl flex items-center justify-center mr-3">
                      <Trophy className="h-5 w-5 text-blue-600" />
                    </div>
                    내 랭크 정보
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl">
                    <span className="text-gray-700 font-medium">현재 티어</span>
                    <Badge className="bg-gradient-to-r from-amber-400 to-orange-400 text-white border-0 rounded-full px-3">브론즈 II</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
                    <span className="text-gray-700 font-medium">주 포지션</span>
                    <span className="text-green-600 font-semibold">서포터</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                    <span className="text-gray-700 font-medium">평균 KDA</span>
                    <span className="text-purple-600 font-semibold">3.5</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl">
                    <span className="text-gray-700 font-medium">승률</span>
                    <span className="text-blue-600 font-semibold">68%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-0 rounded-3xl p-2 hover:bg-white/80 transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-pink-600">
                    <div className="w-10 h-10 bg-pink-100 rounded-2xl flex items-center justify-center mr-3">
                      <Heart className="h-5 w-5 text-pink-600" />
                    </div>
                    최근 매칭
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-2xl border border-green-100">
                    <span className="text-gray-700 font-medium">탑라이너김씨</span>
                    <Badge className="bg-green-500 text-white border-0 rounded-full">성공</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-2xl border border-yellow-100">
                    <span className="text-gray-700 font-medium">정글러박씨</span>
                    <Badge className="bg-yellow-500 text-white border-0 rounded-full">진행중</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-2xl border border-red-100">
                    <span className="text-gray-700 font-medium">미드라이너최씨</span>
                    <Badge className="bg-red-400 text-white border-0 rounded-full">거절됨</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-0 rounded-3xl p-2 hover:bg-white/80 transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-purple-600">
                    <div className="w-10 h-10 bg-purple-100 rounded-2xl flex items-center justify-center mr-3">
                      <Star className="h-5 w-5 text-purple-600" />
                    </div>
                    매너 점수
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">4.7</div>
                    <div className="text-sm text-gray-500">5점 만점</div>
                  </div>
                  <div className="space-y-3">
                    <Progress value={94} className="bg-purple-100 h-3 rounded-full" />
                    <div className="text-xs text-gray-500 text-center">최근 5경기 기준</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Search Tab */}
          <TabsContent value="search" className="space-y-8 mt-8">
            <Card className="bg-white/70 backdrop-blur-sm border-0 rounded-3xl">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center text-gray-800 text-xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                    <Filter className="h-6 w-6 text-blue-600" />
                  </div>
                  듀오 파트너 찾기
                </CardTitle>
                <CardDescription className="text-gray-600 ml-16">
                  원하는 조건에 맞는 듀오 파트너를 찾아보세요
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <label className="text-gray-700 font-medium block">티어 범위</label>
                    <Select value={selectedTier} onValueChange={setSelectedTier}>
                      <SelectTrigger className="bg-gray-50 border-gray-200 rounded-2xl h-12 text-gray-700">
                        <SelectValue placeholder="티어 선택" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-gray-200">
                        {tiers.map((tier) => (
                          <SelectItem key={tier} value={tier} className="rounded-xl">{tier}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-gray-700 font-medium block">선호 포지션</label>
                    <Select value={selectedPosition} onValueChange={setSelectedPosition}>
                      <SelectTrigger className="bg-gray-50 border-gray-200 rounded-2xl h-12 text-gray-700">
                        <SelectValue placeholder="포지션 선택" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-gray-200">
                        {positions.map((position) => (
                          <SelectItem key={position} value={position} className="rounded-xl">{position}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-gray-700 font-medium block">플레이 시간</label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger className="bg-gray-50 border-gray-200 rounded-2xl h-12 text-gray-700">
                        <SelectValue placeholder="시간대 선택" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-gray-200">
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time} className="rounded-xl">{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold h-12 rounded-2xl border-0 transition-all duration-300">
                  <Search className="h-5 w-5 mr-2" />
                  듀오 파트너 검색
                </Button>
              </CardContent>
            </Card>

            {/* User Results */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockUsers.map((user) => (
                <Card key={user.id} className="bg-white/70 backdrop-blur-sm border-0 rounded-3xl p-2 hover:bg-white/80 hover:scale-105 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-gray-800">{user.name}</CardTitle>
                      <Badge className={`
                        ${user.tier.includes('골드') ? 'bg-gradient-to-r from-yellow-400 to-amber-400' : 
                          user.tier.includes('실버') ? 'bg-gradient-to-r from-gray-400 to-slate-400' : 'bg-gradient-to-r from-amber-600 to-orange-600'}
                        text-white border-0 rounded-full px-3
                      `}>
                        {user.tier}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-600 flex items-center space-x-2">
                      <span>{user.position}</span>
                      <span>•</span>
                      <span>{user.playtime} 활동</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-green-50 rounded-2xl">
                        <div className="text-sm text-gray-600">평균 KDA</div>
                        <div className="text-green-600 font-bold text-lg">{user.kda}</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-2xl">
                        <div className="text-sm text-gray-600">승률</div>
                        <div className="text-blue-600 font-bold text-lg">{user.winRate}%</div>
                      </div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-2xl">
                      <div className="text-sm text-gray-600">매너</div>
                      <div className="text-purple-600 font-semibold">{user.manner}</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {user.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-600 border-0 rounded-full px-3 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      className="w-full mt-4 bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 text-white font-semibold h-11 rounded-2xl border-0 transition-all duration-300"
                      onClick={() => handleMatchRequest(user.id, user.name)}
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      듀오 요청
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Requests Tab */}
          <TabsContent value="requests" className="space-y-8 mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/70 backdrop-blur-sm border-0 rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-green-600 flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center mr-3">
                      <MessageCircle className="h-4 w-4 text-green-600" />
                    </div>
                    받은 요청
                  </CardTitle>
                  <CardDescription className="text-gray-600 ml-11">
                    나에게 온 듀오 요청들
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                    <div className="flex items-center space-x-4">
                      <Avatar className="ring-2 ring-blue-200">
                        <AvatarFallback className="bg-blue-400 text-white">정</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-gray-800 font-semibold">정글러정씨</div>
                        <div className="text-gray-500 text-sm">골드 III • 정글</div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        className="bg-green-500 hover:bg-green-600 text-white rounded-xl border-0 px-4"
                        onClick={() => handleAcceptRequest("정글러정씨")}
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-red-400 hover:bg-red-500 text-white rounded-xl border-0 px-4">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                    <div className="flex items-center space-x-4">
                      <Avatar className="ring-2 ring-purple-200">
                        <AvatarFallback className="bg-purple-400 text-white">미</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-gray-800 font-semibold">미드라이너미씨</div>
                        <div className="text-gray-500 text-sm">실버 I • 미드</div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white rounded-xl border-0 px-4">
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-red-400 hover:bg-red-500 text-white rounded-xl border-0 px-4">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-0 rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-blue-600 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
                      <Clock className="h-4 w-4 text-blue-600" />
                    </div>
                    보낸 요청
                  </CardTitle>
                  <CardDescription className="text-gray-600 ml-11">
                    내가 보낸 듀오 요청들
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-5 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-100">
                    <div className="flex items-center space-x-4">
                      <Avatar className="ring-2 ring-orange-200">
                        <AvatarFallback className="bg-orange-400 text-white">탑</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-gray-800 font-semibold">탑라이너탑씨</div>
                        <div className="text-gray-500 text-sm">골드 II • 탑</div>
                      </div>
                    </div>
                    <Badge className="bg-yellow-400 text-white border-0 rounded-full">대기중</Badge>
                  </div>

                  <div className="flex items-center justify-between p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                    <div className="flex items-center space-x-4">
                      <Avatar className="ring-2 ring-green-200">
                        <AvatarFallback className="bg-green-400 text-white">원</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-gray-800 font-semibold">원딜러원씨</div>
                        <div className="text-gray-500 text-sm">골드 I • 원딜</div>
                      </div>
                    </div>
                    <Badge className="bg-green-500 text-white border-0 rounded-full">수락됨</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-8 mt-8">
            <Card className="bg-white/70 backdrop-blur-sm border-0 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-gray-800 flex items-center text-xl">
                  <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  내 프로필 수정
                </CardTitle>
                <CardDescription className="text-gray-600 ml-16">
                  더 정확한 매칭을 위해 프로필을 업데이트하세요
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-gray-700 font-medium block">소환사명</label>
                    <Input 
                      defaultValue="김훌라" 
                      className="bg-gray-50 border-gray-200 rounded-2xl h-12 text-gray-700"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-gray-700 font-medium block">주 포지션</label>
                    <Select defaultValue="서포터">
                      <SelectTrigger className="bg-gray-50 border-gray-200 rounded-2xl h-12 text-gray-700">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-gray-200">
                        {positions.map((position) => (
                          <SelectItem key={position} value={position} className="rounded-xl">{position}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-gray-700 font-medium block">선호 플레이 시간</label>
                    <Select defaultValue="저녁 (18-22시)">
                      <SelectTrigger className="bg-gray-50 border-gray-200 rounded-2xl h-12 text-gray-700">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-gray-200">
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time} className="rounded-xl">{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-gray-700 font-medium block">플레이 스타일</label>
                    <Select defaultValue="매너 중시">
                      <SelectTrigger className="bg-gray-50 border-gray-200 rounded-2xl h-12 text-gray-700">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-gray-200">
                        <SelectItem value="매너 중시" className="rounded-xl">매너 중시</SelectItem>
                        <SelectItem value="실력 중시" className="rounded-xl">실력 중시</SelectItem>
                        <SelectItem value="재미 중시" className="rounded-xl">재미 중시</SelectItem>
                        <SelectItem value="승부 중시" className="rounded-xl">승부 중시</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <label className="text-gray-700 font-medium block">매칭 선호 조건</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {["욕설 금지", "음성 채팅", "진지한 플레이", "재미있게", "랭크 위주", "듀오 큐"].map((tag) => (
                      <label key={tag} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
                        <input 
                          type="checkbox" 
                          className="rounded-lg w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500" 
                          defaultChecked={tag === "욕설 금지"} 
                        />
                        <span className="text-gray-700 font-medium">{tag}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold h-12 rounded-2xl border-0 transition-all duration-300">
                  <Shield className="h-5 w-5 mr-2" />
                  프로필 업데이트
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
