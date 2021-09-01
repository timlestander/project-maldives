import { ResponsivePie } from '@nivo/pie';
import { CenteredLabel, ChartContainer, ChartsWrapper, HeaderText, Wrapper } from './GraphPage.styles';

const GraphPage = () => {
  
  const testData = [
    {
      "id": "win",
      "label": "Vinst",
      "value": 12,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "loss",
      "label": "Förlust",
      "value": 5,
      "color": "rgb(244, 117, 96)"
    },
    {
      "id": "push",
      "label": "Återbetalt",
      "value": 2,
      "color": "rgb(241, 225, 91)"
    },
  ]

  return (
    <Wrapper>
      <HeaderText>Vem träffar mest?</HeaderText>
      <ChartsWrapper>
        <ChartContainer>
          <CenteredLabel>Tim</CenteredLabel>
          <ResponsivePie
              data={testData}
              margin={{
                top: 36,
                bottom: 36,
                left: 36,
                right: 36
              }}
              innerRadius={0.5} 
              animate={true}
              activeOuterRadiusOffset={8}
              cornerRadius={3}
              padAngle={0.7}
              enableArcLinkLabels={false}
              colors={{ datum: 'data.color' }} />
        </ChartContainer>

        <ChartContainer>
          <CenteredLabel>Joppe</CenteredLabel>
          <ResponsivePie
              data={testData}
              margin={{
                top: 36,
                bottom: 36,
                left: 36,
                right: 36
              }}
              innerRadius={0.5} 
              animate={true}
              activeOuterRadiusOffset={8}
              cornerRadius={3}
              padAngle={0.7}
              enableArcLinkLabels={false}
              colors={{ datum: 'data.color' }} />
        </ChartContainer>

        <ChartContainer>
          <CenteredLabel>Jolle</CenteredLabel>
          <ResponsivePie
              data={testData}
              margin={{
                top: 36,
                bottom: 36,
                left: 36,
                right: 36
              }}
              innerRadius={0.5} 
              animate={true}
              activeOuterRadiusOffset={8}
              cornerRadius={3}
              padAngle={0.7}
              enableArcLinkLabels={false}
              colors={{ datum: 'data.color' }} />
        </ChartContainer>

        <ChartContainer>
          <CenteredLabel>Babben</CenteredLabel>
          <ResponsivePie
              data={testData}
              margin={{
                top: 36,
                bottom: 36,
                left: 36,
                right: 36
              }}
              innerRadius={0.5} 
              animate={true}
              activeOuterRadiusOffset={8}
              cornerRadius={3}
              padAngle={0.7}
              enableArcLinkLabels={false}
              colors={{ datum: 'data.color' }} />
        </ChartContainer>
      </ChartsWrapper>
    </Wrapper>
  );
}

export default GraphPage;