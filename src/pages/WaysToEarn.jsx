import { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { Headline, Body } from '@shipt/design-system-typography';
import { Button, IconButton } from '@shipt/design-system-buttons';
import { Stack, Box } from '@shipt/design-system-layouts';
import { Badge } from '@shipt/design-system-badge';
import { FeedbackBanner } from '@shipt/design-system-banner';
import { Avatar } from '@shipt/design-system-avatar';
import { SegmentedControl } from '@shipt/design-system-segmented-control';
import {
  ArrowLeftIcon,
  ArrowUpIcon,
  ChevronRightIcon,
  PositiveIcon,
  WarningTriangleIcon,
  AddIcon,
  SearchIcon,
  FilterIcon,
  CloudUploadIcon,
  VisibilityIcon,
  MenuIcon,
  OptionsHorizontalIcon,
  CloseIcon,
  InfoIcon,
  LockIcon,
} from '@shipt/design-system-icons';

/* ─── LAYOUT SHELLS ─── */

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
  max-width: 680px;
  margin: 0 auto;
`;

const Screen = styled.div`
  flex: 1;
  max-width: 680px;
  margin: 0 auto;
  width: 100%;
  padding-bottom: 32px;
  background: #ffffff;
`;

/* ─── BALANCE ROW ─── */

const BalanceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
`;

const BalanceEyebrow = styled.div`
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #666666;
  margin-bottom: 4px;
`;

const BalanceAmount = styled.div`
  font-size: 32px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.5px;
`;

const BalanceSup = styled.sup`
  font-size: 16px;
  font-weight: 400;
  vertical-align: super;
  color: #666666;
`;

const BalanceSub = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #666666;
`;

/* ─── CHIP / FILTER ROW ─── */

const FilterRow = styled.div`
  padding: 12px 16px;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
  &::-webkit-scrollbar {
    display: none;
  }

  /* Let the SegmentedControl expand naturally instead of wrapping */
  & > div {
    width: max-content;
    min-width: 100%;
  }
`;

/* ─── SECTION LABEL ─── */

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

/* ─── NOTIFICATION / BANNER WRAPPER ─── */

const NotifWrapper = styled.div`
  margin: 16px;
  padding: 12px 16px;
  border-radius: 4px;
  border-left: 3px solid #ed6f0e;
  background: #fef3ec;
`;

const NotifTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 6px;
  gap: 8px;
`;

const NotifEyebrow = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #b4540b;
`;

const NotifPts = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  flex-shrink: 0;
  color: #ed6f0e;
`;

const NotifTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 4px;
`;

const NotifDesc = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #666666;
  margin-bottom: 12px;
`;

/* ─── PROGRESS BAR ─── */

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
  width: ${({ $pct }) => $pct}%;
  transition: width 0.4s cubic-bezier(0.2, 0.8, 0.4, 1);
  background: ${({ $variant }) =>
    $variant === 'warn'
      ? '#ED6F0E'
      : $variant === 'pos'
        ? '#07A35A'
        : '#333333'};
`;

const ProgressMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  color: #666666;

  strong {
    color: #000000;
    font-weight: 500;
  }
`;

/* ─── DIVIDER ─── */

const Divider = styled.div`
  height: 16px;
  background: #f0f0f0;
  border-top: 1px solid hsla(0, 0%, 0%, 0.08);
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.08);
`;

/* ─── STREAK CARD ─── */

const StreakCard = styled.div`
  margin: 0 16px 8px;
  background: #ffffff;
  border: 1px solid hsla(0, 0%, 0%, 0.16);
  border-radius: 0;
  box-shadow: 0 1px 4px hsla(0, 0%, 0%, 0.16);
  padding: 16px;
`;

const StreakTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const StreakEyebrow = styled.div`
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #666666;
  margin-bottom: 4px;
`;

const StreakTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

const StreakBadge = styled.span`
  background: #ebf8f2;
  color: #057c44;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  padding: 0 12px;
  border-radius: 4px;
  white-space: nowrap;
`;

const PipRow = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
`;

const Pip = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 2px;
  background: ${({ $state }) =>
    $state === 'done'
      ? '#000000'
      : $state === 'active'
        ? '#07A35A'
        : '#E5E5E5'};
`;

const StreakMeta = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #666666;

  strong {
    color: #000000;
    font-weight: 500;
  }
`;

/* ─── LIST ITEM ─── */

const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
  cursor: ${({ $done }) => ($done ? 'default' : 'pointer')};
  opacity: ${({ $done }) => ($done ? 0.38 : 1)};
  transition: background 0.25s cubic-bezier(0.2, 0.8, 0.4, 1);

  &:hover {
    background: ${({ $done }) => ($done ? '#FFFFFF' : '#F7F7F7')};
  }
`;

// Resolve variant to theme background colors for Avatar retailerColor
function useVariantColor() {
  const theme = useTheme();
  const fb = theme.color.background.feedback;
  const base = theme.color.background.base;
  return {
    pos: fb.positive.soft,
    pri: fb.info.soft,
    warn: fb.warning.soft,
    dark: base.neutral.inverse,
    neu: base.neutral.soft,
  };
}

const ListBody = styled.div`
  flex: 1;
  min-width: 0;
`;

const ListTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ $secondary }) => ($secondary ? '#666666' : '#000000')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ListDesc = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #666666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TagRow = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 4px;
  flex-wrap: wrap;
`;

const ListRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  flex-shrink: 0;
`;

const PtsVal = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${({ $muted }) => ($muted ? '#666666' : 'inherit')};
  text-decoration: ${({ $muted }) => ($muted ? 'line-through' : 'none')};
`;

const PtsUnit = styled.span`
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  color: #666666;
`;

const CheckCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #07a35a;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ChevronWrap = styled.span`
  color: #999999;
  flex-shrink: 0;
  display: flex;
`;

/* ─── MILESTONE ITEM ─── */

const MilestoneItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
  background: ${({ $active }) => ($active ? '#F7F7F7' : 'transparent')};
`;

const MilestoneAvatar = styled.div`
  flex-shrink: 0;
  opacity: ${({ $state }) => ($state === 'locked' ? 0.38 : 1)};
`;

const MBody = styled.div`
  flex: 1;
`;

const MTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 2px;
`;

const MSub = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #666666;
`;

const MPts = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  flex-shrink: 0;
  color: ${({ $state }) =>
    $state === 'done' ? '#666666' : $state === 'locked' ? '#B3B3B3' : 'inherit'};
  text-decoration: ${({ $state }) => ($state === 'done' ? 'line-through' : 'none')};
`;

/* ─── ICON MAP ─── */

const ICON_MAP = {
  'arrow-up': ArrowUpIcon,
  search: SearchIcon,
  filter: FilterIcon,
  upload: CloudUploadIcon,
  show: VisibilityIcon,
  check: PositiveIcon,
  alert: InfoIcon,
  plus: AddIcon,
  menu: MenuIcon,
  overflow: OptionsHorizontalIcon,
  delete: CloseIcon,
};

/* ─── TAG HELPER ─── */

function TagBadge({ type, children }) {
  const mapping = {
    pos: { concept: 'feedback', variant: 'positive' },
    pri: { concept: 'feedback', variant: 'info' },
    warn: { concept: 'feedback', variant: 'warning' },
    neu: { concept: 'base', variant: 'neutral' },
  };
  const { concept, variant } = mapping[type] || mapping.neu;
  return (
    <Badge size="xs" concept={concept} variant={variant}>
      {children}
    </Badge>
  );
}

/* ─── DATA ─── */

const FILTERS = ['All', 'Learning', 'Quality', 'Community', 'Streaks', 'Milestones'];

const LEARNING_ITEMS = [
  { icon: 'show', variant: 'warn', title: 'Heavy item handling cert', desc: 'Watch module and pass the quiz', tags: [{ type: 'pri', label: 'One-time' }, { type: 'warn', label: 'New' }], pts: 100 },
  { icon: 'search', variant: 'warn', title: 'Store layout mastery — Costco', desc: 'Efficient routing for large-format stores', tags: [{ type: 'pri', label: 'One-time' }], pts: 75 },
  { icon: 'check', variant: 'neu', title: 'Substitution best practices', desc: 'Earned Apr 1 · 50 pts added', tags: [{ type: 'pri', label: 'One-time' }], pts: 50, done: true },
  { icon: 'show', variant: 'warn', title: 'Store layout mastery — Target', desc: 'Efficient routing for Target floor plans', tags: [{ type: 'pri', label: 'One-time' }], pts: 75 },
  { icon: 'show', variant: 'warn', title: 'Store layout mastery — Whole Foods', desc: 'Efficient routing for Whole Foods floor plans', tags: [{ type: 'pri', label: 'One-time' }], pts: 75 },
  { icon: 'alert', variant: 'warn', title: 'Alcohol handling certification', desc: 'Complete compliance training for age-verified items', tags: [{ type: 'pri', label: 'One-time' }], pts: 150 },
  { icon: 'search', variant: 'warn', title: 'Produce freshness training', desc: 'Learn how to select the best fresh items', tags: [{ type: 'pri', label: 'One-time' }, { type: 'warn', label: 'New' }], pts: 75 },
  { icon: 'show', variant: 'warn', title: 'Cold chain handling', desc: 'Proper handling of frozen and refrigerated items', tags: [{ type: 'pri', label: 'One-time' }], pts: 100 },
  { icon: 'filter', variant: 'warn', title: 'Member communication tips', desc: 'Best practices for in-shop updates and substitutions', tags: [{ type: 'pri', label: 'One-time' }], pts: 50 },
];

const QUALITY_ITEMS = [
  { icon: 'delete', variant: 'pos', title: 'Zero-issue streak — 5 shops', desc: 'No flagged substitutions or complaints', tags: [{ type: 'pos', label: 'Recurring' }], pts: 75 },
  { icon: 'show', variant: 'pos', title: 'Zero-issue streak — 20 shops', desc: 'No flagged substitutions or complaints across 20 shops', tags: [{ type: 'pos', label: 'Recurring' }], pts: 300 },
  { icon: 'arrow-up', variant: 'pos', title: 'On-time delivery streak — 10 shops', desc: 'All deliveries completed within the promised window', tags: [{ type: 'pos', label: 'Recurring' }], pts: 100 },
  { icon: 'check', variant: 'pos', title: 'Perfect item accuracy — 10 shops', desc: 'Every item found or correctly substituted', tags: [{ type: 'pos', label: 'Recurring' }], pts: 125 },
  { icon: 'arrow-up', variant: 'pos', title: 'High-value order completed', desc: 'Successfully shop an order over $200', tags: [{ type: 'pos', label: 'Recurring' }], pts: 50 },
];

const COMMUNITY_ITEMS = [
  { icon: 'upload', variant: 'pri', title: 'Refer a new shopper', desc: 'They must complete 5 shops to unlock', tags: [{ type: 'pos', label: 'Recurring' }], pts: 300 },
  { icon: 'filter', variant: 'pri', title: 'Beta test a new app feature', desc: 'Submit feedback on unreleased features', tags: [{ type: 'neu', label: 'Limited spots' }], pts: 200 },
  { icon: 'overflow', variant: 'pri', title: 'Attend a shopper meetup', desc: 'Virtual or in-person · once per quarter', tags: [{ type: 'pos', label: 'Recurring' }], pts: 150 },
  { icon: 'search', variant: 'pri', title: 'Submit a store feedback report', desc: 'Report out-of-stock patterns or layout changes', tags: [{ type: 'pos', label: 'Recurring' }], pts: 25 },
  { icon: 'menu', variant: 'pri', title: 'Respond to a shopper survey', desc: 'Share your experience to help improve the platform', tags: [{ type: 'pos', label: 'Recurring' }], pts: 40 },
  { icon: 'arrow-up', variant: 'pri', title: 'Mentor a new shopper', desc: 'Guide a shopper through their first 3 orders', tags: [{ type: 'neu', label: 'Limited spots' }, { type: 'warn', label: 'New' }], pts: 500 },
  { icon: 'show', variant: 'pri', title: 'Share your shopper story', desc: 'Record a short video for our social channels', tags: [{ type: 'neu', label: 'Limited spots' }], pts: 250 },
];

const PROFILE_ITEMS = [
  { icon: 'check', variant: 'neu', title: 'Add a profile photo', desc: 'Earned Mar 1 · 20 pts added', tags: [{ type: 'pri', label: 'One-time' }], pts: 20, done: true },
  { icon: 'check', variant: 'neu', title: 'Complete your profile', desc: 'Earned Mar 1 · 50 pts added', tags: [{ type: 'pri', label: 'One-time' }], pts: 50, done: true },
  { icon: 'filter', variant: 'neu', title: 'Add vehicle information', desc: 'Car make, model, and trunk size for better order matching', tags: [{ type: 'pri', label: 'One-time' }], pts: 25 },
  { icon: 'search', variant: 'neu', title: 'Set preferred shopping zones', desc: 'Tell us where you like to shop most', tags: [{ type: 'pri', label: 'One-time' }], pts: 25 },
  { icon: 'menu', variant: 'neu', title: 'Enable push notifications', desc: 'Get instant alerts for new orders and bonuses', tags: [{ type: 'pri', label: 'One-time' }], pts: 15 },
];

const MILESTONES = [
  { icon: 'check', state: 'done', title: 'First shop completed', sub: 'Earned Feb 15 · Welcome aboard', pts: '50 pts' },
  { icon: 'check', state: 'done', title: 'First 10 shops', sub: 'Earned Mar 2', pts: '100 pts' },
  { icon: 'check', state: 'done', title: 'First 25 shops', sub: 'Earned Mar 22', pts: '150 pts' },
  { icon: 'arrow-up', state: 'next', title: '50 shops complete', sub: "You're at 42 · 8 more to go", pts: '250 pts', active: true },
  { icon: 'plus', state: 'locked', title: '100 shops complete', sub: 'Locked · Complete 50 first', pts: '500 pts' },
  { icon: 'plus', state: 'locked', title: '250 shops complete', sub: 'Locked · Complete 100 first', pts: '750 pts' },
  { icon: 'plus', state: 'locked', title: '500 shops complete', sub: 'Locked · Complete 250 first', pts: '1,500 pts' },
  { icon: 'alert', state: 'locked', title: '1-year Shiptiversary', sub: 'Awarded on your start date anniversary', pts: '300 pts' },
  { icon: 'alert', state: 'locked', title: '2-year Shiptiversary', sub: 'Awarded on your second start date anniversary', pts: '500 pts' },
  { icon: 'plus', state: 'locked', title: 'First shop at a new retailer', sub: 'Complete your first order at any new Shipt partner store', pts: '75 pts' },
  { icon: 'arrow-up', state: 'locked', title: 'Reach Ridge tier', sub: 'Achieve Summit Seeker Ridge status', pts: '200 pts' },
  { icon: 'arrow-up', state: 'locked', title: 'Reach Alpine tier', sub: 'Achieve Summit Seeker Alpine status', pts: '400 pts' },
  { icon: 'arrow-up', state: 'locked', title: 'Reach Summit tier', sub: 'Achieve the highest Summit Seeker status', pts: '1,000 pts' },
];

/* ─── SECTION RENDERERS ─── */

function EarnListItem({ item, onNavigate }) {
  const { icon, variant, title, desc, tags, pts, done } = item;
  const colorVariant = done ? 'neu' : variant;
  const IconComp = ICON_MAP[done ? 'check' : icon];
  const variantColors = useVariantColor();
  return (
    <ListItem $done={done} onClick={done ? undefined : () => onNavigate?.('learning')}>
      <Avatar
        type="icon"
        icon={IconComp || PositiveIcon}
        size="md"
        colorScheme="retailer"
        retailerColor={variantColors[colorVariant] || variantColors.neu}
      />
      <ListBody>
        <ListTitle $secondary={done}>{title}</ListTitle>
        <ListDesc>{desc}</ListDesc>
        <TagRow>
          {tags.map((t, i) => (
            <TagBadge key={i} type={t.type}>{t.label}</TagBadge>
          ))}
        </TagRow>
      </ListBody>
      <ListRight>
        <PtsVal $muted={done}>{pts}</PtsVal>
        <PtsUnit>pts</PtsUnit>
      </ListRight>
      {done ? (
        <CheckCircle>
          <PositiveIcon width={12} height={12} />
        </CheckCircle>
      ) : (
        <ChevronWrap>
          <ChevronRightIcon width={20} height={20} />
        </ChevronWrap>
      )}
    </ListItem>
  );
}

/* ─── MAIN COMPONENT ─── */

export default function WaysToEarn({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const variantColors = useVariantColor();

  const show = (category) => activeFilter === 'All' || activeFilter === category;

  return (
    <>
      {/* STICKY HEADER */}
      <HeaderBar>
        <HeaderInner>
          <IconButton
            icon={ArrowLeftIcon}
            size="md"
            variant="ghost"
            aria-label="Go back"
            onClick={() => onNavigate?.('back')}
          />
          <Headline as="span" size="sm" weight="medium">
            Ways to Earn
          </Headline>
        </HeaderInner>
      </HeaderBar>

      {/* SCROLLABLE CONTENT */}
      <Screen>
        {/* BALANCE ROW */}
        <BalanceRow>
          <div>
            <BalanceEyebrow>Points balance</BalanceEyebrow>
            <BalanceAmount>
              4,280 <BalanceSup>pts</BalanceSup>
            </BalanceAmount>
            <BalanceSub>≈ $42.80 redeemable</BalanceSub>
          </div>
          <Button variant="primary" concept="action" size="sm">
            Redeem
          </Button>
        </BalanceRow>

        {/* FILTER CHIPS */}
        <FilterRow>
          <SegmentedControl
            value={activeFilter}
            onChange={(val) => setActiveFilter(val)}
            size="sm"
          >
            <SegmentedControl.RadioGroup>
              {FILTERS.map((f) => (
                <SegmentedControl.Radio key={f} value={f} label={f} />
              ))}
            </SegmentedControl.RadioGroup>
          </SegmentedControl>
        </FilterRow>

        {/* LIMITED TIME */}
        {show('Streaks') && (
          <>
            <SectionLabel>Limited time</SectionLabel>
            <NotifWrapper>
              <NotifTop>
                <NotifEyebrow>
                  <WarningTriangleIcon width={14} height={14} />
                  Ends Apr 20
                </NotifEyebrow>
                <NotifPts>500 pts</NotifPts>
              </NotifTop>
              <NotifTitle>Spring Surge Challenge</NotifTitle>
              <NotifDesc>
                Complete 10 shops Apr 8–20 to unlock the full bonus. Points scale as you go.
              </NotifDesc>
              <ProgressTrack>
                <ProgressFill $pct={40} $variant="warn" />
              </ProgressTrack>
              <ProgressMeta>
                <span>
                  <strong>4 of 10</strong> shops complete
                </span>
                <span>16 days left</span>
              </ProgressMeta>
            </NotifWrapper>
            <Divider />
          </>
        )}

        {/* STREAKS */}
        {show('Streaks') && (
          <>
            <SectionLabel>Streaks</SectionLabel>
            <StreakCard>
              <StreakTop>
                <div>
                  <StreakEyebrow>Weekly streak</StreakEyebrow>
                  <StreakTitle>Shop every week</StreakTitle>
                </div>
                <StreakBadge>+150 pts</StreakBadge>
              </StreakTop>
              <PipRow>
                <Pip $state="done" />
                <Pip $state="done" />
                <Pip $state="done" />
                <Pip $state="active" />
                <Pip $state="empty" />
                <Pip $state="empty" />
                <Pip $state="empty" />
              </PipRow>
              <StreakMeta>
                Week <strong>4 of 7</strong> · Keep going to earn the full bonus
              </StreakMeta>
            </StreakCard>

            <EarnListItem
              item={{
                icon: 'arrow-up',
                variant: 'pri',
                title: 'Log in 5 days in a row',
                desc: 'Open the app daily — resets each Monday',
                tags: [{ type: 'pos', label: 'Recurring' }],
                pts: 25,
              }}
              onNavigate={onNavigate}
            />
            <Divider />
          </>
        )}

        {/* LEARNING */}
        {show('Learning') && (
          <>
            <SectionLabel>Learning</SectionLabel>
            {LEARNING_ITEMS.map((item, i) => (
              <EarnListItem key={i} item={item} onNavigate={onNavigate} />
            ))}
            <Divider />
          </>
        )}

        {/* QUALITY */}
        {show('Quality') && (
          <>
            <SectionLabel>Quality</SectionLabel>
            {QUALITY_ITEMS.map((item, i) => (
              <EarnListItem key={i} item={item} onNavigate={onNavigate} />
            ))}
            <Divider />
          </>
        )}

        {/* COMMUNITY */}
        {show('Community') && (
          <>
            <SectionLabel>Community</SectionLabel>
            {COMMUNITY_ITEMS.map((item, i) => (
              <EarnListItem key={i} item={item} onNavigate={onNavigate} />
            ))}
            <Divider />
          </>
        )}

        {/* PROFILE & SETUP */}
        {show('Learning') && (
          <>
            <SectionLabel>Profile &amp; setup</SectionLabel>
            {PROFILE_ITEMS.map((item, i) => (
              <EarnListItem key={i} item={item} onNavigate={onNavigate} />
            ))}
            <Divider />
          </>
        )}

        {/* MILESTONES */}
        {show('Milestones') && (
          <>
            <SectionLabel>Milestones</SectionLabel>
            {MILESTONES.map((m, i) => {
              const MIcon = ICON_MAP[m.icon] || AddIcon;
              const milestoneColor = m.state === 'next' ? variantColors.dark : variantColors.neu;
              return (
                <MilestoneItem key={i} $active={m.active}>
                  <MilestoneAvatar $state={m.state}>
                    <Avatar
                      type="icon"
                      icon={MIcon}
                      size="md"
                      colorScheme="retailer"
                      retailerColor={milestoneColor}
                      hasEmphasis={m.state === 'next'}
                    />
                  </MilestoneAvatar>
                  <MBody>
                    <MTitle>{m.title}</MTitle>
                    <MSub>{m.sub}</MSub>
                  </MBody>
                  <MPts $state={m.state}>{m.pts}</MPts>
                  {m.state === 'done' && (
                    <CheckCircle style={{ marginLeft: 8 }}>
                      <PositiveIcon width={12} height={12} />
                    </CheckCircle>
                  )}
                  {m.state === 'next' && (
                    <ChevronWrap style={{ marginLeft: 8 }}>
                      <ChevronRightIcon width={20} height={20} />
                    </ChevronWrap>
                  )}
                </MilestoneItem>
              );
            })}
          </>
        )}
      </Screen>
    </>
  );
}
