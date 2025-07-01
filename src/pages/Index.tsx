
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-yellow-400" />
              <h1 className="text-2xl font-bold text-white">LoL 듀오 매칭</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-white text-sm">
                <span className="text-yellow-400">김훌라</span> (브론즈 II)
              </div>
              <Avatar>
                <AvatarFallback className="bg-yellow-400 text-black">김</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-black/20 backdrop-blur-sm">
            <TabsTrigger value="dashboard" className="text-white data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
              <Trophy className="h-4 w-4 mr-2" />
              대시보드
            </TabsTrigger>
            <TabsTrigger value="search" className="text-white data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
              <Search className="h-4 w-4 mr-2" />
              매칭 찾기
            </TabsTrigger>
            <TabsTrigger value="requests" className="text-white data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
              <MessageCircle className="h-4 w-4 mr-2" />
              요청함
            </TabsTrigger>
            <TabsTrigger value="profile" className="text-white data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
              <Users className="h-4 w-4 mr-2" />
              내 프로필
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6 mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-black/40 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-yellow-400">
                    <Trophy className="h-5 w-5 mr-2" />
                    내 랭크 정보
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>현재 티어</span>
                      <Badge className="bg-amber-600">브론즈 II</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>주 포지션</span>
                      <span className="text-yellow-400">서포터</span>
                    </div>
                    <div className="flex justify-between">
                      <span>평균 KDA</span>
                      <span className="text-green-400">3.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>승률</span>
                      <span className="text-blue-400">68%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-400">
                    <Heart className="h-5 w-5 mr-2" />
                    최근 매칭
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-white/10 rounded">
                      <span className="text-sm">탑라이너김씨</span>
                      <Badge className="bg-green-600">성공</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white/10 rounded">
                      <span className="text-sm">정글러박씨</span>
                      <Badge className="bg-yellow-600">진행중</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white/10 rounded">
                      <span className="text-sm">미드라이너최씨</span>
                      <Badge className="bg-red-600">거절됨</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-400">
                    <Star className="h-5 w-5 mr-2" />
                    매너 점수
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">4.7</div>
                      <div className="text-sm text-gray-300">5점 만점</div>
                    </div>
                    <Progress value={94} className="bg-white/20" />
                    <div className="text-xs text-gray-400 text-center">
                      최근 5경기 기준
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Search Tab */}
          <TabsContent value="search" className="space-y-6 mt-6">
            <Card className="bg-black/40 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Filter className="h-5 w-5 mr-2 text-yellow-400" />
                  듀오 파트너 찾기
                </CardTitle>
                <CardDescription className="text-gray-300">
                  원하는 조건에 맞는 듀오 파트너를 찾아보세요
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="text-white text-sm mb-2 block">티어 범위</label>
                    <Select value={selectedTier} onValueChange={setSelectedTier}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="티어 선택" />
                      </SelectTrigger>
                      <SelectContent>
                        {tiers.map((tier) => (
                          <SelectItem key={tier} value={tier}>{tier}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-white text-sm mb-2 block">선호 포지션</label>
                    <Select value={selectedPosition} onValueChange={setSelectedPosition}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="포지션 선택" />
                      </SelectTrigger>
                      <SelectContent>
                        {positions.map((position) => (
                          <SelectItem key={position} value={position}>{position}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-white text-sm mb-2 block">플레이 시간</label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="시간대 선택" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                  <Search className="h-4 w-4 mr-2" />
                  듀오 파트너 검색
                </Button>
              </CardContent>
            </Card>

            {/* User Results */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockUsers.map((user) => (
                <Card key={user.id} className="bg-black/40 backdrop-blur-sm border-white/20 text-white">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{user.name}</CardTitle>
                      <Badge className={`
                        ${user.tier.includes('골드') ? 'bg-yellow-600' : 
                          user.tier.includes('실버') ? 'bg-gray-500' : 'bg-amber-700'}
                      `}>
                        {user.tier}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-300">
                      {user.position} • {user.playtime} 활동
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>평균 KDA</span>
                        <span className="text-green-400">{user.kda}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>승률</span>
                        <span className="text-blue-400">{user.winRate}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>매너</span>
                        <span className="text-purple-400">{user.manner}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {user.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-white/20">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button 
                        className="w-full mt-4 bg-green-600 hover:bg-green-700"
                        onClick={() => handleMatchRequest(user.id, user.name)}
                      >
                        <Heart className="h-4 w-4 mr-2" />
                        듀오 요청
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Requests Tab */}
          <TabsContent value="requests" className="space-y-6 mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-black/40 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-green-400">받은 요청</CardTitle>
                  <CardDescription className="text-gray-300">
                    나에게 온 듀오 요청들
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-blue-500">정</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-white font-medium">정글러정씨</div>
                        <div className="text-gray-400 text-sm">골드 III • 정글</div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => handleAcceptRequest("정글러정씨")}
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="destructive">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-purple-500">미</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-white font-medium">미드라이너미씨</div>
                        <div className="text-gray-400 text-sm">실버 I • 미드</div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="destructive">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-blue-400">보낸 요청</CardTitle>
                  <CardDescription className="text-gray-300">
                    내가 보낸 듀오 요청들
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-red-500">탑</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-white font-medium">탑라이너탑씨</div>
                        <div className="text-gray-400 text-sm">골드 II • 탑</div>
                      </div>
                    </div>
                    <Badge className="bg-yellow-600">대기중</Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-green-500">원</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-white font-medium">원딜러원씨</div>
                        <div className="text-gray-400 text-sm">골드 I • 원딜</div>
                      </div>
                    </div>
                    <Badge className="bg-green-600">수락됨</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6 mt-6">
            <Card className="bg-black/40 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">내 프로필 수정</CardTitle>
                <CardDescription className="text-gray-300">
                  더 정확한 매칭을 위해 프로필을 업데이트하세요
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-white text-sm mb-2 block">소환사명</label>
                    <Input 
                      defaultValue="김훌라" 
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-white text-sm mb-2 block">주 포지션</label>
                    <Select defaultValue="서포터">
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {positions.map((position) => (
                          <SelectItem key={position} value={position}>{position}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-white text-sm mb-2 block">선호 플레이 시간</label>
                    <Select defaultValue="저녁 (18-22시)">
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-white text-sm mb-2 block">플레이 스타일</label>
                    <Select defaultValue="매너 중시">
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="매너 중시">매너 중시</SelectItem>
                        <SelectItem value="실력 중시">실력 중시</SelectItem>
                        <SelectItem value="재미 중시">재미 중시</SelectItem>
                        <SelectItem value="승부 중시">승부 중시</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="text-white text-sm block">매칭 선호 조건</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["욕설 금지", "음성 채팅", "진지한 플레이", "재미있게", "랭크 위주", "듀오 큐"].map((tag) => (
                      <label key={tag} className="flex items-center space-x-2 text-white">
                        <input type="checkbox" className="rounded" defaultChecked={tag === "욕설 금지"} />
                        <span className="text-sm">{tag}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
                  <Shield className="h-4 w-4 mr-2" />
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
