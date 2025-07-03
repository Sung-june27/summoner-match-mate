
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
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
  Check,
  UserPlus,
  Crown,
  Target
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedTier, setSelectedTier] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isLookingForDuo, setIsLookingForDuo] = useState(true);
  const [matchingType, setMatchingType] = useState("duo"); // duo, trio, team
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
      tags: ["욕설 금지", "음성 가능", "진지한 플레이"],
      isLookingForDuo: true
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
      tags: ["재미있게", "음성 선택", "랭크 위주"],
      isLookingForDuo: false
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
      tags: ["매너 중시", "음성 필수", "장기 듀오"],
      isLookingForDuo: true
    }
  ];

  const mockTeams = [
    {
      id: 1,
      name: "골드 승급 팀",
      type: "5인 팀",
      currentMembers: 3,
      maxMembers: 5,
      neededPositions: ["미드", "원딜"],
      averageTier: "골드 III",
      playtime: "저녁",
      tags: ["매너 중시", "음성 필수", "랭크 위주"],
      members: [
        { name: "팀장김씨", position: "탑", tier: "골드 II" },
        { name: "정글이씨", position: "정글", tier: "골드 III" },
        { name: "서폿박씨", position: "서포터", tier: "골드 I" }
      ]
    },
    {
      id: 2,
      name: "3인 파티 모집",
      type: "3인 파티",
      currentMembers: 2,
      maxMembers: 3,
      neededPositions: ["서포터"],
      averageTier: "실버 I",
      playtime: "저녁",
      tags: ["재미있게", "음성 가능"],
      members: [
        { name: "원딜최씨", position: "원딜", tier: "실버 II" },
        { name: "미드정씨", position: "미드", tier: "실버 I" }
      ]
    }
  ];

  const handleMatchRequest = (userId: number, userName: string) => {
    const user = mockUsers.find(u => u.id === userId);
    if (!user?.isLookingForDuo) {
      toast({
        title: "요청을 보낼 수 없습니다",
        description: `${userName}님이 현재 듀오를 찾고 있지 않습니다.`,
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "매칭 요청 전송",
      description: `${userName}님에게 듀오 요청을 보냈습니다!`,
    });
  };

  const handleTeamJoinRequest = (teamId: number, teamName: string) => {
    toast({
      title: "팀 가입 요청 전송",
      description: `${teamName}에 가입 요청을 보냈습니다!`,
    });
  };

  const handleAcceptRequest = (userName: string) => {
    toast({
      title: "매칭 성사! 🎉",
      description: `${userName}님과의 듀오가 성사되었습니다. 디스코드로 연결됩니다.`,
    });
  };

  const toggleDuoStatus = () => {
    setIsLookingForDuo(!isLookingForDuo);
    toast({
      title: isLookingForDuo ? "듀오 찾기 중단" : "듀오 찾기 시작",
      description: isLookingForDuo 
        ? "다른 유저들이 더 이상 요청을 보낼 수 없습니다." 
        : "다른 유저들이 듀오 요청을 보낼 수 있습니다.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-slate-100">
        <div className="container mx-auto px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center">
                <Gamepad2 className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-800 tracking-tight">LoL 듀오 매칭</h1>
                <p className="text-slate-500 mt-1">완벽한 게임 파트너를 찾아보세요</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              {/* 듀오 찾는 중 토글 */}
              <div className="flex items-center space-x-3 bg-white rounded-2xl px-6 py-3 border border-slate-100">
                <div className="text-right">
                  <div className="text-slate-700 font-medium text-sm">듀오 찾는 중</div>
                  <div className="text-xs text-slate-500">
                    {isLookingForDuo ? "활성화됨" : "비활성화됨"}
                  </div>
                </div>
                <Switch
                  checked={isLookingForDuo}
                  onCheckedChange={toggleDuoStatus}
                  className="data-[state=checked]:bg-green-500"
                />
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-slate-800 font-semibold">김훌라</div>
                  <div className="text-sm text-slate-500">브론즈 II</div>
                </div>
                <Avatar className="ring-2 ring-blue-100 w-12 h-12">
                  <AvatarFallback className="bg-gradient-to-br from-blue-400 to-indigo-400 text-white font-semibold text-lg">김</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-8 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-white/80 backdrop-blur-sm rounded-3xl p-2 border border-slate-100">
            <TabsTrigger 
              value="dashboard" 
              className="text-slate-600 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm rounded-2xl font-medium transition-all py-3"
            >
              <Trophy className="h-4 w-4 mr-2" />
              대시보드
            </TabsTrigger>
            <TabsTrigger 
              value="search" 
              className="text-slate-600 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm rounded-2xl font-medium transition-all py-3"
            >
              <Search className="h-4 w-4 mr-2" />
              듀오 찾기
            </TabsTrigger>
            <TabsTrigger 
              value="team" 
              className="text-slate-600 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm rounded-2xl font-medium transition-all py-3"
            >
              <Users className="h-4 w-4 mr-2" />
              팀 매칭
            </TabsTrigger>
            <TabsTrigger 
              value="requests" 
              className="text-slate-600 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm rounded-2xl font-medium transition-all py-3"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              요청함
            </TabsTrigger>
            <TabsTrigger 
              value="profile" 
              className="text-slate-600 data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm rounded-2xl font-medium transition-all py-3"
            >
              <Shield className="h-4 w-4 mr-2" />
              내 프로필
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-12 mt-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <Card className="bg-white/90 backdrop-blur-sm border-0 rounded-3xl p-3 transition-all duration-300">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center text-blue-600 text-xl">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mr-4">
                      <Trophy className="h-6 w-6 text-blue-600" />
                    </div>
                    내 랭크 정보
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl">
                    <span className="text-slate-700 font-medium">현재 티어</span>
                    <Badge className="bg-gradient-to-r from-amber-400 to-orange-400 text-white border-0 rounded-full px-4 py-1">브론즈 II</Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
                    <span className="text-slate-700 font-medium">주 포지션</span>
                    <span className="text-green-600 font-semibold">서포터</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                    <span className="text-slate-700 font-medium">평균 KDA</span>
                    <span className="text-purple-600 font-semibold">3.5</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl">
                    <span className="text-slate-700 font-medium">승률</span>
                    <span className="text-blue-600 font-semibold">68%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-0 rounded-3xl p-3 transition-all duration-300">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center text-pink-600 text-xl">
                    <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center mr-4">
                      <Heart className="h-6 w-6 text-pink-600" />
                    </div>
                    최근 매칭
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-5 bg-green-50 rounded-2xl">
                    <span className="text-slate-700 font-medium">탑라이너김씨</span>
                    <Badge className="bg-green-500 text-white border-0 rounded-full">성공</Badge>
                  </div>
                  <div className="flex items-center justify-between p-5 bg-yellow-50 rounded-2xl">
                    <span className="text-slate-700 font-medium">정글러박씨</span>
                    <Badge className="bg-yellow-500 text-white border-0 rounded-full">진행중</Badge>
                  </div>
                  <div className="flex items-center justify-between p-5 bg-red-50 rounded-2xl">
                    <span className="text-slate-700 font-medium">미드라이너최씨</span>
                    <Badge className="bg-red-400 text-white border-0 rounded-full">거절됨</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-0 rounded-3xl p-3 transition-all duration-300">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center text-purple-600 text-xl">
                    <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mr-4">
                      <Star className="h-6 w-6 text-purple-600" />
                    </div>
                    매너 점수
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-purple-600 mb-3">4.7</div>
                    <div className="text-slate-500">5점 만점</div>
                  </div>
                  <div className="space-y-4">
                    <Progress value={94} className="bg-purple-100 h-4 rounded-full" />
                    <div className="text-sm text-slate-500 text-center">최근 5경기 기준</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Search Tab */}
          <TabsContent value="search" className="space-y-10 mt-12">
            <Card className="bg-white/90 backdrop-blur-sm border-0 rounded-3xl">
              <CardHeader className="pb-8">
                <CardTitle className="flex items-center text-slate-800 text-2xl">
                  <div className="w-14 h-14 bg-blue-50 rounded-3xl flex items-center justify-center mr-5">
                    <Filter className="h-7 w-7 text-blue-600" />
                  </div>
                  듀오 파트너 찾기
                </CardTitle>
                <CardDescription className="text-slate-600 ml-19 text-lg">
                  원하는 조건에 맞는 듀오 파트너를 찾아보세요
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-10">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <label className="text-slate-700 font-semibold block text-lg">티어 범위</label>
                    <Select value={selectedTier} onValueChange={setSelectedTier}>
                      <SelectTrigger className="bg-slate-50 border-slate-200 rounded-2xl h-14 text-slate-700">
                        <SelectValue placeholder="티어 선택" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-slate-200">
                        {tiers.map((tier) => (
                          <SelectItem key={tier} value={tier} className="rounded-xl">{tier}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-slate-700 font-semibold block text-lg">선호 포지션</label>
                    <Select value={selectedPosition} onValueChange={setSelectedPosition}>
                      <SelectTrigger className="bg-slate-50 border-slate-200 rounded-2xl h-14 text-slate-700">
                        <SelectValue placeholder="포지션 선택" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-slate-200">
                        {positions.map((position) => (
                          <SelectItem key={position} value={position} className="rounded-xl">{position}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-slate-700 font-semibold block text-lg">플레이 시간</label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger className="bg-slate-50 border-slate-200 rounded-2xl h-14 text-slate-700">
                        <SelectValue placeholder="시간대 선택" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-slate-200">
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time} className="rounded-xl">{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold h-14 rounded-2xl border-0 transition-all duration-300 text-lg">
                  <Search className="h-6 w-6 mr-3" />
                  듀오 파트너 검색
                </Button>
              </CardContent>
            </Card>

            {/* User Results */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {mockUsers.map((user) => (
                <Card key={user.id} className="bg-white/90 backdrop-blur-sm border-0 rounded-3xl p-3 transition-all duration-300 relative">
                  {/* 듀오 찾는 중 상태 표시 */}
                  <div className="absolute top-4 right-4">
                    {user.isLookingForDuo ? (
                      <Badge className="bg-green-500 text-white border-0 rounded-full px-3 py-1">
                        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                        듀오 찾는 중
                      </Badge>
                    ) : (
                      <Badge className="bg-slate-400 text-white border-0 rounded-full px-3 py-1">
                        오프라인
                      </Badge>
                    )}
                  </div>
                  
                  <CardHeader className="pb-5 pt-12">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-slate-800">{user.name}</CardTitle>
                      <Badge className={`
                        ${user.tier.includes('골드') ? 'bg-gradient-to-r from-yellow-400 to-amber-400' : 
                          user.tier.includes('실버') ? 'bg-gradient-to-r from-slate-400 to-slate-500' : 'bg-gradient-to-r from-amber-600 to-orange-600'}
                        text-white border-0 rounded-full px-4 py-1
                      `}>
                        {user.tier}
                      </Badge>
                    </div>
                    <CardDescription className="text-slate-600 flex items-center space-x-2 text-base">
                      <span>{user.position}</span>
                      <span>•</span>
                      <span>{user.playtime} 활동</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-5">
                      <div className="text-center p-4 bg-green-50 rounded-2xl">
                        <div className="text-sm text-slate-600 mb-1">평균 KDA</div>
                        <div className="text-green-600 font-bold text-xl">{user.kda}</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-2xl">
                        <div className="text-sm text-slate-600 mb-1">승률</div>
                        <div className="text-blue-600 font-bold text-xl">{user.winRate}%</div>
                      </div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-2xl">
                      <div className="text-sm text-slate-600 mb-1">매너</div>
                      <div className="text-purple-600 font-semibold text-base">{user.manner}</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {user.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-sm bg-slate-100 text-slate-600 border-0 rounded-full px-3 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      className={`w-full mt-6 font-semibold h-12 rounded-2xl border-0 transition-all duration-300 ${
                        user.isLookingForDuo 
                          ? "bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 text-white" 
                          : "bg-slate-200 text-slate-500 cursor-not-allowed"
                      }`}
                      onClick={() => handleMatchRequest(user.id, user.name)}
                      disabled={!user.isLookingForDuo}
                    >
                      <Heart className="h-5 w-5 mr-2" />
                      {user.isLookingForDuo ? "듀오 요청" : "오프라인"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team" className="space-y-10 mt-12">
            <Card className="bg-white/90 backdrop-blur-sm border-0 rounded-3xl">
              <CardHeader className="pb-8">
                <CardTitle className="flex items-center text-slate-800 text-2xl">
                  <div className="w-14 h-14 bg-purple-50 rounded-3xl flex items-center justify-center mr-5">
                    <Users className="h-7 w-7 text-purple-600" />
                  </div>
                  팀 매칭 찾기
                </CardTitle>
                <CardDescription className="text-slate-600 ml-19 text-lg">
                  3인 파티나 5인 팀을 구성해보세요
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <label className="text-slate-700 font-semibold block text-lg">팀 구성</label>
                    <Select value={matchingType} onValueChange={setMatchingType}>
                      <SelectTrigger className="bg-slate-50 border-slate-200 rounded-2xl h-14 text-slate-700">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-slate-200">
                        <SelectItem value="trio" className="rounded-xl">3인 파티</SelectItem>
                        <SelectItem value="team" className="rounded-xl">5인 팀</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-slate-700 font-semibold block text-lg">필요한 포지션</label>
                    <Select>
                      <SelectTrigger className="bg-slate-50 border-slate-200 rounded-2xl h-14 text-slate-700">
                        <SelectValue placeholder="포지션 선택" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-slate-200">
                        {positions.map((position) => (
                          <SelectItem key={position} value={position} className="rounded-xl">{position}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-slate-700 font-semibold block text-lg">평균 티어</label>
                    <Select>
                      <SelectTrigger className="bg-slate-50 border-slate-200 rounded-2xl h-14 text-slate-700">
                        <SelectValue placeholder="티어 선택" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-slate-200">
                        {tiers.map((tier) => (
                          <SelectItem key={tier} value={tier} className="rounded-xl">{tier}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold h-14 rounded-2xl border-0 transition-all duration-300 text-lg">
                  <Users className="h-6 w-6 mr-3" />
                  팀 검색하기
                </Button>
              </CardContent>
            </Card>

            {/* Team Results */}
            <div className="grid md:grid-cols-2 gap-10">
              {mockTeams.map((team) => (
                <Card key={team.id} className="bg-white/90 backdrop-blur-sm border-0 rounded-3xl p-4 transition-all duration-300">
                  <CardHeader className="pb-6">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-slate-800 flex items-center">
                        <Crown className="h-6 w-6 text-yellow-500 mr-2" />
                        {team.name}
                      </CardTitle>
                      <Badge className="bg-gradient-to-r from-purple-400 to-pink-400 text-white border-0 rounded-full px-4 py-1">
                        {team.type}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span>{team.currentMembers}/{team.maxMembers} 멤버</span>
                      <span>{team.averageTier}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* 현재 팀원 표시 */}
                    <div>
                      <h4 className="text-slate-700 font-semibold mb-3">현재 팀원</h4>
                      <div className="space-y-2">
                        {team.members.map((member, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl">
                            <div className="flex items-center space-x-3">
                              <Avatar className="w-8 h-8">
                                <AvatarFallback className="bg-blue-400 text-white text-sm">
                                  {member.name.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-slate-700 font-medium">{member.name}</span>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium text-slate-600">{member.position}</div>
                              <div className="text-xs text-slate-500">{member.tier}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 필요한 포지션 */}
                    <div>
                      <h4 className="text-slate-700 font-semibold mb-3">필요한 포지션</h4>
                      <div className="flex flex-wrap gap-2">
                        {team.neededPositions.map((position, index) => (
                          <Badge key={index} className="bg-red-100 text-red-600 border border-red-200 rounded-full px-3 py-1">
                            <Target className="h-3 w-3 mr-1" />
                            {position}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* 팀 태그 */}
                    <div className="flex flex-wrap gap-2">
                      {team.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-sm bg-slate-100 text-slate-600 border-0 rounded-full px-3 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-semibold h-12 rounded-2xl border-0 transition-all duration-300"
                      onClick={() => handleTeamJoinRequest(team.id, team.name)}
                    >
                      <UserPlus className="h-5 w-5 mr-2" />
                      팀 가입 요청
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Requests Tab */}
          <TabsContent value="requests" className="space-y-10 mt-12">
            <div className="grid md:grid-cols-2 gap-10">
              <Card className="bg-white/90 backdrop-blur-sm border-0 rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-green-600 flex items-center text-xl">
                    <div className="w-10 h-10 bg-green-50 rounded-2xl flex items-center justify-center mr-4">
                      <MessageCircle className="h-5 w-5 text-green-600" />
                    </div>
                    받은 요청
                  </CardTitle>
                  <CardDescription className="text-slate-600 ml-14 text-base">
                    나에게 온 듀오 요청들
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
                    <div className="flex items-center space-x-4">
                      <Avatar className="ring-2 ring-blue-200 w-12 h-12">
                        <AvatarFallback className="bg-blue-400 text-white">정</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-slate-800 font-semibold">정글러정씨</div>
                        <div className="text-slate-500 text-sm">골드 III • 정글</div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Button 
                        size="sm" 
                        className="bg-green-500 hover:bg-green-600 text-white rounded-2xl border-0 px-5 py-2"
                        onClick={() => handleAcceptRequest("정글러정씨")}
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-red-400 hover:bg-red-500 text-white rounded-2xl border-0 px-5 py-2">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                    <div className="flex items-center space-x-4">
                      <Avatar className="ring-2 ring-purple-200 w-12 h-12">
                        <AvatarFallback className="bg-purple-400 text-white">미</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-slate-800 font-semibold">미드라이너미씨</div>
                        <div className="text-slate-500 text-sm">실버 I • 미드</div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white rounded-2xl border-0 px-5 py-2">
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-red-400 hover:bg-red-500 text-white rounded-2xl border-0 px-5 py-2">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-0 rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-blue-600 flex items-center text-xl">
                    <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center mr-4">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    보낸 요청
                  </CardTitle>
                  <CardDescription className="text-slate-600 ml-14 text-base">
                    내가 보낸 듀오 요청들
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl">
                    <div className="flex items-center space-x-4">
                      <Avatar className="ring-2 ring-orange-200 w-12 h-12">
                        <AvatarFallback className="bg-orange-400 text-white">탑</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-slate-800 font-semibold">탑라이너탑씨</div>
                        <div className="text-slate-500 text-sm">골드 II • 탑</div>
                      </div>
                    </div>
                    <Badge className="bg-yellow-400 text-white border-0 rounded-full px-4 py-1">대기중</Badge>
                  </div>

                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
                    <div className="flex items-center space-x-4">
                      <Avatar className="ring-2 ring-green-200 w-12 h-12">
                        <AvatarFallback className="bg-green-400 text-white">원</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-slate-800 font-semibold">원딜러원씨</div>
                        <div className="text-slate-500 text-sm">골드 I • 원딜</div>
                      </div>
                    </div>
                    <Badge className="bg-green-500 text-white border-0 rounded-full px-4 py-1">수락됨</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-10 mt-12">
            <Card className="bg-white/90 backdrop-blur-sm border-0 rounded-3xl">
              <CardHeader>
                <CardTitle className="text-slate-800 flex items-center text-2xl">
                  <div className="w-14 h-14 bg-purple-50 rounded-3xl flex items-center justify-center mr-5">
                    <Shield className="h-7 w-7 text-purple-600" />
                  </div>
                  내 프로필 수정
                </CardTitle>
                <CardDescription className="text-slate-600 ml-19 text-lg">
                  더 정확한 매칭을 위해 프로필을 업데이트하세요
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-slate-700 font-semibold block text-lg">소환사명</label>
                    <Input 
                      defaultValue="김훌라" 
                      className="bg-slate-50 border-slate-200 rounded-2xl h-14 text-slate-700"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-slate-700 font-semibold block text-lg">주 포지션</label>
                    <Select defaultValue="서포터">
                      <SelectTrigger className="bg-slate-50 border-slate-200 rounded-2xl h-14 text-slate-700">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-slate-200">
                        {positions.map((position) => (
                          <SelectItem key={position} value={position} className="rounded-xl">{position}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-slate-700 font-semibold block text-lg">선호 플레이 시간</label>
                    <Select defaultValue="저녁 (18-22시)">
                      <SelectTrigger className="bg-slate-50 border-slate-200 rounded-2xl h-14 text-slate-700">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-slate-200">
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time} className="rounded-xl">{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-slate-700 font-semibold block text-lg">플레이 스타일</label>
                    <Select defaultValue="매너 중시">
                      <SelectTrigger className="bg-slate-50 border-slate-200 rounded-2xl h-14 text-slate-700">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-slate-200">
                        <SelectItem value="매너 중시" className="rounded-xl">매너 중시</SelectItem>
                        <SelectItem value="실력 중시" className="rounded-xl">실력 중시</SelectItem>
                        <SelectItem value="재미 중시" className="rounded-xl">재미 중시</SelectItem>
                        <SelectItem value="승부 중시" className="rounded-xl">승부 중시</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <label className="text-slate-700 font-semibold block text-lg">매칭 선호 조건</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    {["욕설 금지", "음성 채팅", "진지한 플레이", "재미있게", "랭크 위주", "듀오 큐"].map((tag) => (
                      <label key={tag} className="flex items-center space-x-4 p-5 bg-slate-50 rounded-2xl cursor-pointer hover:bg-slate-100 transition-colors">
                        <input 
                          type="checkbox" 
                          className="rounded-xl w-5 h-5 text-blue-500 border-slate-300 focus:ring-blue-500" 
                          defaultChecked={tag === "욕설 금지"} 
                        />
                        <span className="text-slate-700 font-medium">{tag}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold h-14 rounded-2xl border-0 transition-all duration-300 text-lg">
                  <Shield className="h-6 w-6 mr-3" />
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
