import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Layout from "../layouts/Layout";

const cards = [
  {
    id: 1,
    photoLink:
      "https://img1.russianfood.com/dycontent/images_upl/465/sm_464858.jpg",
    title: "Жаркое по-деревенски",
    description:
      "Простое, но очень ароматное и вкусное блюдо для семейного обеда или ужина.",
  },
  {
    id: 2,
    photoLink:
      "https://img1.russianfood.com/dycontent/images_upl/32/sm_31172.jpg",
    title: "Куриный беф-строганов",
    description:
      "Бефстроганов из курицы - очень нежный и вкусный. И быстро готовится. Готовится так же, как и бефстроганов из говядины, но меньше по времени.",
  },
  {
    id: 3,
    photoLink:
      "https://img1.russianfood.com/dycontent/images_upl/555/sm_554324.jpg",
    title: "Макароны с мясом в томатном соусе, на сковороде",
    description:
      "Блюдо привлекательно тем, что макароны отдельно отваривать не нужно, они тушатся в соусе вместе с мясом. Таким образом макароны полностью пропитываются мясной подливкой.",
  },
  {
    id: 4,
    photoLink:
      "https://img1.russianfood.com/dycontent/images_upl/322/sm_321916.jpg",
    title: "Ленивые голубцы в духовке",
    description:
      "Когда хочется голубцов, а времени на их приготовление нет, выручает ленивый вариант приготовления этого блюда.",
  },
  {
    id: 5,
    photoLink:
      "https://img1.russianfood.com/dycontent/images_upl/195/sm_194679.jpg",
    title: "Жюльен с курицей и грибами",
    description:
      "Очень популярную закуску - жульен (или точнее жюльен) с курицей и грибами, можно приготовить на сковороде, примерно за полчаса, совершенно не напрягая себя приобретением кокотниц и доведением блюда до готовности в духовке. А получается так же вкусно!",
  },
  {
    id: 6,
    photoLink:
      "https://img1.russianfood.com/dycontent/images_upl/57/sm_56498.jpg",
    title: "Запеканка мясная 'Сытная'",
    description:
      "Очень простая в приготовлении, но очень вкусная запеканка из картофеля и мясного фарша, с помидорами и сыром.",
  },
  {
    id: 7,
    photoLink:
      "https://img1.russianfood.com/dycontent/images_upl/311/sm_310322.jpg",
    title: "Фаршированный картофель, запечённый в духовке",
    description:
      "Картошка в духовке, запёченная по этому рецепту, подойдёт как основное блюдо и как гарнир. Готовится очень просто, а получается сытный и ароматный картофель в духовке, выглядит аппетитно, а пахнет",
  },
  {
    id: 8,
    photoLink:
      "https://img1.russianfood.com/dycontent/images_upl/126/sm_125728.jpg",
    title: "Гречка по-купечески",
    description:
      "Гречка 'А добавка будет?'. Если вы никогда не пробовали такой вариант гречки, бегом на кухню! Гречка по-купечески с мясным фаршем - вкусно, полезно и быстро.",
  },
  {
    id: 9,
    photoLink:
      "https://img1.russianfood.com/dycontent/images_upl/360/sm_359494.jpg",
    title: "Джамбалайя",
    description:
      "Сегодня готовлю простое, вкусное и сытное блюдо американской кухни, на основе риса, - джамбалайю. Это креольское блюдо штата Луизиана. Рецептов приготовления джамбалайи - огромное количество, как и нашего борща. :) Блюдо демократичное, допускается замена одних ингредиентов другими. Неизменными ингредиентами джамбалайи остаются рис и томаты. Если вы любите такие простые рецепты для обеда или ужина, то этот рецепт для вас!",
  },
  {
    id: 10,
    photoLink:
      "https://img1.russianfood.com/dycontent/images_upl/465/sm_464858.jpg",
    title: "Жаркое по-деревенски",
    description:
      "Простое, но очень ароматное и вкусное блюдо для семейного обеда или ужина.",
  },
  {
    id: 11,
    photoLink:
      "https://img1.russianfood.com/dycontent/images_upl/574/sm_573466.jpg",
    title: "Тушёная картошка с мясом, грибами и сметаной",
    description:
      "Картофель, тушенный с мясом и грибами, - популярное блюдо домашней кухни, калорийное и, как следствие, очень сытное и питательное. Небольшой секрет: если в конце приготовления сдобрить всё сметаной, жаркое получится ещё вкуснее. Сметана превращается в бархатистый соус с лёгкой кислинкой и сливочным послевкусием и прекрасно объединяет все компоненты в единое блюдо.",
  },
  {
    id: 12,
    photoLink:
      "https://img1.russianfood.com/dycontent/images_upl/465/sm_464858.jpg",
    title: "Жаркое по-деревенски",
    description:
      "Простое, но очень ароматное и вкусное блюдо для семейного обеда или ужина.",
  },
  {
    id: 13,
    photoLink:
      "https://img1.russianfood.com/dycontent/images_upl/214/sm_213550.jpg",
    title: "Запеканка из картофеля и мясного фарша",
    description:
      "Простой в приготовлении, сытный и вкусный семейный обед или ужин - картофельная запеканка с мясным фаршем.",
  },
  {
    id: 14,
    photoLink:
      "https://img1.russianfood.com/dycontent/images_upl/130/sm_129813.jpg",
    title: "Лагман с курицей",
    description:
      "Лагман является традиционным национальным блюдом среднеазиатских народностей. Готовится блюдо из мяса (баранины) с овощами и лапшой. Я решила приготовить лагман на свой лад - из того, что было. Итак, готовим лагман из курицы.",
  },
  {
    id: 15,
    photoLink:
      "https://img1.russianfood.com/dycontent/images_upl/478/sm_477921.jpg",
    title: "Картошка, тушенная с курицей в сметанно-сливочном соусе",
    description:
      "Куриное филе и картофель в соусе из сметаны и сливок покорят с первого кусочка!) Курица и картошка в нежном соусе с добавлением тимьяна приобретают изумительный аромат, замечательный вкус и сочность. А ещё это блюдо готовится достаточно просто, и всего в одной кастрюле, что очень удобно.",
  },
  {
    id: 16,
    photoLink:
      "https://img1.russianfood.com/dycontent/images_upl/492/sm_491254.jpg",
    title: "Макароны с копчёными колбасками в томатно-сливочном соусе",
    description:
      "Хотите рецепт идеального ужина? Он перед вами. Макароны с копчёными колбасками и приятным соусом из сливок и помидоров готовятся быстро. Благодаря соусу обычные макароны становятся нежными, сочными и очень вкусными. Копчёные колбаски, чеснок и базилик добавляют блюду аппетитный аромат, а сыр - только усиливает его сливочный вкус.",
  },
  {
    id: 17,
    photoLink:
      "https://img1.russianfood.com/dycontent/images_upl/117/sm_116992.jpg",
    title: "Куриные котлеты по-французски",
    description:
      "Куриные котлеты по-французски (другие названия - котлеты по-министерски, по-албански) очень нежные и сочные, просто тают во рту. Если вы никогда их не готовили, то наверстывайте упущенное.",
  },
  {
    id: 18,
    photoLink:
      "https://img1.russianfood.com/dycontent/images_upl/233/sm_232644.jpg",
    title: "Куриные рулетики с сыром",
    description:
      "Рулетики из куриного филе - с хрустящей корочкой, нежные и сочные внутри! Куриные рулетики с начинкой из сыра и зелени готовить легко, а улетают они со стола в мгновение ока!",
  },
];

export default () => {
  return (
    <Layout>
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image={card.photoLink}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </Layout>
  );
};
