
var para = [
  //new school
      "The new school of hip hop was a movement in hip hop music starting 1983–84 with the early records of Run–D.M.C. and LL Cool J. Like the hip hop preceding it, it came predominantly from New York City. The new school was initially characterized in form by drum machine led minimalism, often tinged with elements of rock. It was notable for taunts and boasts about rapping, and socio-political commentary, both delivered in an aggressive, self-assertive style.",
      //industry
      "The music industry consists of the companies and individuals that earn money by creating new songs and pieces and selling live concerts and shows, audio and video recordings, compositions and sheet music, and the organizations and associations that aid and represent creators. Among the many individuals and organizations that operate in the industry are: the songwriters and composers who create new songs and musical pieces; the singers, musicians, conductors and bandleaders who perform the music; the companies and professionals who create and sell recorded music and/or sheet music (e.g., music publishers, music producers, recording studios, engineers, record labels, retail and online music stores, performance rights organizations); and those that help organize and present live music performances (sound engineers, booking agents, promoters, music venues, road crew).",
      //Reggse
      "It developed as part of hip hop culture, a subculture defined by four key stylistic elements: MCing/rapping, DJing/scratching with turntables, break dancing, and graffiti writing. Other elements include sampling beats or bass lines from records (or synthesized beats and sounds), and rhythmicbeatboxing. While often used to refer solely to rapping, hip hop more properly denotes the practice of the entire subculture.The term hip hop music is sometimes used synonymously with the term rap music,though rapping is not a required component of hip hop music; the genre may also incorporate other elements of hip hop culture, including DJing, turntablism, scratching, beatboxing, and instrumental tracks.",
      // pop
      "Pop music is a genre of popular music that originated in its modern form in the United States and United Kingdom during the mid 1950s.The terms popular music and pop music are often used interchangeably, although the former describes all music that is popular and includes many styles. Pop and rock were synonymous terms until the late 1960s, when they were increasingly used in opposition from each other.",
      // R&B
      "Rhythm and blues, often abbreviated as R&B or RnB, is a genre of popular African-American music that originated in the 1940s.[1] The term was originally used by record companies to describe recordings marketed predominantly to urban African Americans, at a time when urbane, rocking, jazz based music with a heavy, insistent beat was becoming more popular. In the commercial rhythm and blues music typical of the 1950s through the 1970s, the bands usually consisted of piano, one or two guitars, bass, drums, saxophone, and sometimes background vocalists. R&B lyrical themes often encapsulate the African-American experience of pain and the quest for freedom and joy.[3] Lyrics focus heavily on the themes of triumphs and failures in terms of relationships, freedom, economics, aspirations, and sex.",
      // Hip-Hop
      "Hip hop music, also called hip-hop or rap music,is a music genre developed in the United States by inner-city African Americans in the 1970s which consists of a stylized rhythmic music that commonly accompanies rapping, a rhythmic and rhyming speech that is chanted. It developed as part of hip hop culture, a subculture defined by four key stylistic elements: MCing/rapping, DJing/scratching with turntables, break dancing, and graffiti writing.[6][7][8] Other elements include sampling beats or bass lines from records (or synthesized beats and sounds), and rhythmic beatboxing. While often used to refer solely to rapping, hip hop more properly denotes the practice of the entire subculture.[9][10] The term hip hop music is sometimes used synonymously with the term rap music, though rapping is not a required component of hip hop music; the genre may also incorporate other elements of hip hop culture, including DJing, turntablism, scratching, beatboxing, and instrumental tracks."
];


document.getElementById("decade").addEventListener("click", about);
document.getElementById("combine").addEventListener("click", neww);
document.getElementById("pop").addEventListener("click", pop);
document.getElementById("reggae").addEventListener("click", reggae);
document.getElementById("hip-hop").addEventListener("click", indus);
document.getElementById("randb").addEventListener("click", rb);
function about() {
  document.getElementById("demo").innerHTML = para[0];
  }
function neww() {
  document.getElementById("demo").innerHTML = para[1];
  }
function reggae() {
  document.getElementById("demo").innerHTML = para[2];
  }
function pop() {
  document.getElementById("demo").innerHTML = para[3];
  }
function rb() {
  document.getElementById("demo").innerHTML = para[4];
  }

function indus() {
  document.getElementById("demo").innerHTML = para[5];
  }
