import { useState } from 'react';
import styled from 'styled-components';
import { Headline, Body } from '@shipt/design-system-typography';
import { Button, IconButton, TextButton } from '@shipt/design-system-buttons';
import { Stack, Box } from '@shipt/design-system-layouts';
import { Badge } from '@shipt/design-system-badge';
import { Accordion, AccordionGroup } from '@shipt/design-system-accordion';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  PositiveIcon,
  PlayIcon,
  LockIcon,
  VisibilityIcon,
  InfoCircleIcon,
  CloudUploadIcon,
} from '@shipt/design-system-icons';

/* ═══════════════════════════════════════════
   STYLED COMPONENTS
   ═══════════════════════════════════════════ */

const MAX_W = '680px';

const HeaderBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  background: #ffffff;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 16px 12px;
  max-width: ${MAX_W};
  margin: 0 auto;
`;

const Screen = styled.div`
  flex: 1;
  max-width: ${MAX_W};
  margin: 0 auto;
  width: 100%;
  padding-bottom: 120px;
  background: #ffffff;
`;

// ── Video Hero ──

const VideoHero = styled.div`
  background: #000;
  aspect-ratio: 16 / 9;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const VideoBg = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
        ellipse at 30% 60%,
        rgba(39, 110, 241, 0.15) 0%,
        transparent 50%
      ),
      radial-gradient(
        ellipse at 70% 30%,
        rgba(255, 255, 255, 0.04) 0%,
        transparent 40%
      );
  }
`;

const VideoContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const PlayButton = styled.button`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  transition: background 0.25s cubic-bezier(0.2, 0.8, 0.4, 1),
    transform 0.25s cubic-bezier(0.2, 0.8, 0.4, 1);
  backdrop-filter: blur(4px);

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: scale(1.05);
  }
`;

const VideoLabel = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.02em;
`;

const VideoDuration = styled.span`
  position: absolute;
  bottom: 12px;
  right: 16px;
  font-size: 11px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.4);
  padding: 2px 8px;
  border-radius: 2px;
  backdrop-filter: blur(4px);
`;

// ── Module Header ──

const ModuleHeaderSection = styled.div`
  padding: 20px 16px 12px;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
`;

const ModuleEyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #666666;

  svg {
    flex-shrink: 0;
  }
`;

// ── Reward Callout ──

const RewardCallout = styled.div`
  margin: 16px;
  padding: 12px 16px;
  background: #edf3fe;
  border-radius: 4px;
  border-left: 3px solid #276ef1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const RewardEyebrow = styled.div`
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #174eb6;
  margin-bottom: 4px;
`;

const RewardAmount = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #276ef1;
`;

const RewardNote = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #174eb6;
`;

// ── Overall Progress ──

const ProgressSection = styled.div`
  padding: 16px;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
`;

const ProgressHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const ProgressTrack = styled.div`
  height: 4px;
  background: #e5e5e5;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 6px;
`;

const ProgressFill = styled.div`
  height: 100%;
  border-radius: 2px;
  background: #276ef1;
  transition: width 0.4s cubic-bezier(0.2, 0.8, 0.4, 1);
`;

// ── Section Label ──

const SectionLabel = styled.div`
  padding: 20px 16px 8px;
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #666666;
  background: #ffffff;
`;

// ── Step Circle (lesson indicator) ──

const StepCircleBase = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
`;

const StepCircleDone = styled(StepCircleBase)`
  background: #07a35a;
  color: #fff;
`;

const StepCircleActive = styled(StepCircleBase)`
  background: #000000;
  color: #fff;
`;

const StepCircleLocked = styled(StepCircleBase)`
  background: #f0f0f0;
  color: #999999;
`;

// ── Accordion overrides ──

const LessonAccordionWrap = styled.div`
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);

  &[data-locked='true'] {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const LessonExpandedContent = styled.div`
  background: #f7f7f7;
  padding: 16px 16px 16px 72px;
  border-top: 1px solid hsla(0, 0%, 0%, 0.08);
`;

const LessonParagraph = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #666666;
  margin-bottom: 12px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const LessonActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
`;

// ── Divider ──

const Divider = styled.div`
  height: 16px;
  background: #f0f0f0;
  border-top: 1px solid hsla(0, 0%, 0%, 0.08);
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.08);
`;

// ── Quiz Card ──

const QuizCard = styled.div`
  margin: 16px;
  border: 1px solid hsla(0, 0%, 0%, 0.16);
  border-radius: 0;
  box-shadow: 0 1px 4px hsla(0, 0%, 0%, 0.16);
  overflow: hidden;
`;

const QuizCardHeader = styled.div`
  padding: 16px;
  background: #000000;
  color: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`;

const QuizEyebrow = styled.div`
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 4px;
`;

const QuizSub = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 4px;
`;

const QuizLockIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.5);
`;

const QuizCardBody = styled.div`
  padding: 16px;
  background: #ffffff;
`;

const QuizRequirement = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.08);

  &:last-of-type {
    border-bottom: none;
  }
`;

const ReqIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${(p) => (p.$done ? '#07A35A' : '#F0F0F0')};
  color: ${(p) => (p.$done ? '#fff' : '#999999')};
`;

const ReqLabel = styled.span`
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  flex: 1;
  color: ${(p) => (p.$done ? '#666666' : 'inherit')};
  text-decoration: ${(p) => (p.$done ? 'line-through' : 'none')};
`;

// ── Sticky CTA Bar ──

const CtaBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: #ffffff;
  border-top: 1px solid hsla(0, 0%, 0%, 0.12);
  padding: 12px 16px calc(env(safe-area-inset-bottom, 0px) + 16px);
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
`;

const CtaInner = styled.div`
  max-width: ${MAX_W};
  margin: 0 auto;
  overflow: hidden;
`;

const CtaNote = styled.span`
  display: block;
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  color: #666666;
  text-align: center;
  margin-top: 6px;
  max-width: ${MAX_W};
  margin-left: auto;
  margin-right: auto;
`;

// ── Dot separator ──

const Dot = styled.span`
  width: 3px;
  height: 3px;
  background: #cccccc;
  border-radius: 50%;
  flex-shrink: 0;
  display: inline-block;
`;

/* ═══════════════════════════════════════════
   STEP CIRCLE COMPONENT
   ═══════════════════════════════════════════ */

function StepCircle({ status, number }) {
  if (status === 'done') {
    return (
      <StepCircleDone>
        <PositiveIcon size="sm" />
      </StepCircleDone>
    );
  }
  if (status === 'locked') {
    return (
      <StepCircleLocked>
        <LockIcon size="sm" />
      </StepCircleLocked>
    );
  }
  return <StepCircleActive>{number}</StepCircleActive>;
}

/* ═══════════════════════════════════════════
   LESSON DATA
   ═══════════════════════════════════════════ */

const LESSONS = [
  {
    id: 1,
    title: 'What counts as a heavy item?',
    status: 'done',
    meta: 'Completed Mar 28',
    duration: '3 min',
    content: [
      'Items over 20 lbs, awkward dimensions (like a 12-pack), or anything that requires two hands to safely move. This includes water cases, pet food bags, laundry detergent, and large produce like watermelon.',
      'Knowing what counts helps you plan your cart load before you reach the register — grouping heavy items at the bottom and near the cart wheels.',
    ],
  },
  {
    id: 2,
    title: 'Safe lifting technique',
    status: 'done',
    meta: 'Completed Mar 29',
    duration: '5 min',
    content: [
      'Bend at the knees, not the waist. Keep the load close to your body. Never twist while holding weight — pivot your feet instead. For anything over 40 lbs, ask a store associate for assistance.',
      'Protecting your body on every shop keeps you earning longer. One preventable injury is worth more than any single order.',
    ],
  },
  {
    id: 3,
    title: 'Loading your cart and vehicle',
    status: 'active',
    meta: 'Up next',
    duration: '5 min',
    content: [
      'In the cart, heavy items go on the lower rack or the bottom of the basket — never stacked on top of fragile or crushable items. Group by weight, not by department.',
      'In your vehicle, place heavy bags flat in the trunk rather than upright. Avoid loading bags on seats where they can shift. For SUVs and hatchbacks, keep heavy items low and centered.',
    ],
    hasActions: true,
  },
  {
    id: 4,
    title: 'Delivery handoff for heavy orders',
    status: 'locked',
    meta: 'Complete lesson 3 to unlock',
    duration: '5 min',
    content: [],
  },
];

const QUIZ_REQUIREMENTS = [
  { label: 'Lesson 1 — What counts as a heavy item', done: true },
  { label: 'Lesson 2 — Safe lifting technique', done: true },
  { label: 'Lesson 3 — Loading your cart and vehicle', done: false },
  { label: 'Lesson 4 — Delivery handoff for heavy orders', done: false },
];

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */

export default function LearningModule({ onNavigate }) {
  const [expandedLesson, setExpandedLesson] = useState(3);

  const handleLessonToggle = (lessonId) => {
    setExpandedLesson((prev) => (prev === lessonId ? null : lessonId));
  };

  return (
    <>
      {/* ── STICKY HEADER ── */}
      <HeaderBar>
        <HeaderInner>
          <IconButton
            icon={ArrowLeftIcon}
            size="md"
            variant="ghost"
            aria-label="Back to Ways to Earn"
            onClick={() => onNavigate('back')}
          />
          <Headline as="span" size="md" weight="medium">
            Learning
          </Headline>
        </HeaderInner>
      </HeaderBar>

      <Screen>
        {/* ── VIDEO HERO ── */}
        <VideoHero role="button" aria-label="Play introduction video">
          <VideoBg />
          <VideoContent>
            <PlayButton aria-label="Play">
              <PlayIcon size="lg" />
            </PlayButton>
            <VideoLabel>Introduction · Watch before starting</VideoLabel>
          </VideoContent>
          <VideoDuration>4:32</VideoDuration>
        </VideoHero>

        {/* ── MODULE HEADER ── */}
        <ModuleHeaderSection>
          <ModuleEyebrow>
            <Badge size="sm" concept="feedback" variant="warning">
              Certification
            </Badge>
            <Body size="sm" variant="secondary">
              ·
            </Body>
            <Body size="sm" variant="secondary">
              Learning
            </Body>
          </ModuleEyebrow>

          <Headline as="h1" size="xl" weight="medium" style={{ marginBottom: 10 }}>
            Heavy Item Handling
          </Headline>

          <Body
            size="md"
            variant="secondary"
            style={{ marginBottom: 16 }}
          >
            Learn safe techniques for shopping and delivering heavy, bulky, or
            awkward items — protecting yourself and ensuring items arrive in
            great condition.
          </Body>

          <MetaRow>
            <MetaItem>
              <VisibilityIcon size="sm" color="#666666" />
              4 lessons
            </MetaItem>
            <MetaItem>
              <InfoCircleIcon size="sm" color="#666666" />
              1 quiz · 5 questions
            </MetaItem>
            <MetaItem>
              <ArrowRightIcon size="sm" color="#666666" />
              ~18 min
            </MetaItem>
          </MetaRow>
        </ModuleHeaderSection>

        {/* ── REWARD CALLOUT ── */}
        <RewardCallout>
          <div>
            <RewardEyebrow>Earn on completion</RewardEyebrow>
            <RewardAmount>100 pts</RewardAmount>
            <RewardNote>
              One-time · Added to your balance immediately
            </RewardNote>
          </div>
          <CloudUploadIcon
            size="xl"
            style={{ color: '#276EF1', opacity: 0.4, flexShrink: 0 }}
          />
        </RewardCallout>

        {/* ── OVERALL PROGRESS ── */}
        <ProgressSection>
          <ProgressHeader>
            <Body size="md" weight="medium">
              Your progress
            </Body>
            <Body size="sm" variant="secondary">
              2 of 4 lessons complete
            </Body>
          </ProgressHeader>
          <ProgressTrack>
            <ProgressFill style={{ width: '50%' }} />
          </ProgressTrack>
          <Body size="sm" variant="secondary" style={{ fontSize: 11 }}>
            Complete all lessons and pass the quiz to earn your certification
          </Body>
        </ProgressSection>

        {/* ── LESSONS ── */}
        <SectionLabel>Lessons</SectionLabel>

        <AccordionGroup canOpenMultiple={false}>
          {LESSONS.map((lesson) => {
            const isExpanded = expandedLesson === lesson.id;
            const isLocked = lesson.status === 'locked';

            return (
              <LessonAccordionWrap
                key={lesson.id}
                data-locked={isLocked}
              >
                <Accordion
                  headerAs="h3"
                  title={lesson.title}
                  subtitle={
                    <Stack direction="row" align="center" spacing="xs" wrap>
                      {lesson.status === 'done' && (
                        <Badge size="sm" concept="feedback" variant="positive">
                          Done
                        </Badge>
                      )}
                      {lesson.status === 'active' && (
                        <Badge size="sm" concept="feedback" variant="info">
                          Up next
                        </Badge>
                      )}
                      {lesson.status === 'locked' && (
                        <Badge size="sm" concept="base" variant="neutral">
                          Locked
                        </Badge>
                      )}
                      <Body size="sm" variant="secondary">
                        {lesson.meta}
                      </Body>
                      <Dot />
                      <Body size="sm" variant="secondary">
                        {lesson.duration}
                      </Body>
                    </Stack>
                  }
                  leading={
                    <StepCircle status={lesson.status} number={lesson.id} />
                  }
                  isExpanded={isLocked ? false : isExpanded}
                  onClick={
                    isLocked
                      ? undefined
                      : () => handleLessonToggle(lesson.id)
                  }
                  shouldPersistContent
                >
                  {lesson.content.length > 0 && (
                    <Box padding="md">
                      <Stack spacing="sm" direction="column">
                        {lesson.content.map((text, i) => (
                          <Body key={i} size="md" variant="secondary">
                            {text}
                          </Body>
                        ))}
                        {lesson.hasActions && (
                          <LessonActions>
                            <Button
                              variant="primary"
                              concept="action"
                              size="sm"
                              leadingIcon={PlayIcon}
                            >
                              Watch lesson
                            </Button>
                            <TextButton variant="ghost" size="md">
                              Mark as read
                            </TextButton>
                          </LessonActions>
                        )}
                      </Stack>
                    </Box>
                  )}
                </Accordion>
                {!isLocked && lesson.status === 'locked' ? null : null}
              </LessonAccordionWrap>
            );
          })}
        </AccordionGroup>

        <Divider />

        {/* ── KNOWLEDGE CHECK ── */}
        <SectionLabel>Knowledge check</SectionLabel>

        <QuizCard>
          <QuizCardHeader>
            <div>
              <QuizEyebrow>Final quiz</QuizEyebrow>
              <Headline as="h3" size="sm" weight="medium" style={{ color: '#fff' }}>
                Heavy Item Handling
              </Headline>
              <QuizSub>5 questions · Pass with 80% or higher</QuizSub>
            </div>
            <QuizLockIcon>
              <LockIcon size="md" />
            </QuizLockIcon>
          </QuizCardHeader>

          <QuizCardBody>
            {QUIZ_REQUIREMENTS.map((req, i) => (
              <QuizRequirement key={i}>
                <ReqIcon $done={req.done}>
                  {req.done ? (
                    <PositiveIcon size="sm" />
                  ) : (
                    <LockIcon size="sm" />
                  )}
                </ReqIcon>
                <ReqLabel $done={req.done}>{req.label}</ReqLabel>
              </QuizRequirement>
            ))}
          </QuizCardBody>
        </QuizCard>
      </Screen>

      {/* ── STICKY CTA BAR ── */}
      <CtaBar>
        <CtaInner>
          <Button
            variant="primary"
            concept="action"
            size="lg"
            fullWidth
            leadingIcon={PlayIcon}
          >
            Continue — Lesson 3
          </Button>
          <CtaNote>
            2 lessons remaining · Quiz unlocks after all lessons are complete
          </CtaNote>
        </CtaInner>
      </CtaBar>
    </>
  );
}
