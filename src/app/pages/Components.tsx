import { useState } from 'react';
import {
  Heart, Star, Send, Download, Plus, X, Check, ChevronDown,
  Search, Bell, User, Home, Settings, AlertCircle,
  CheckCircle, Info, Play, Upload, Eye, Bold, Italic, Underline,
  AlignLeft, AlignCenter, AlignRight, Moon, Sun, Copy,
} from 'lucide-react';

import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { Switch } from '../components/ui/switch';
import { Slider } from '../components/ui/slider';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '../components/ui/select';
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
} from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Alert, AlertTitle, AlertDescription } from '../components/ui/alert';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Progress } from '../components/ui/progress';
import { Separator } from '../components/ui/separator';
import { Skeleton } from '../components/ui/skeleton';
import { Toggle } from '../components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '../components/ui/toggle-group';
import {
  Tabs, TabsList, TabsTrigger, TabsContent,
} from '../components/ui/tabs';
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from '../components/ui/accordion';
import {
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle,
  DialogDescription, DialogFooter, DialogClose,
} from '../components/ui/dialog';
import {
  Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle,
  SheetDescription, SheetClose,
} from '../components/ui/sheet';
import {
  Tooltip, TooltipTrigger, TooltipContent, TooltipProvider,
} from '../components/ui/tooltip';
import {
  Popover, PopoverTrigger, PopoverContent,
} from '../components/ui/popover';
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel,
} from '../components/ui/dropdown-menu';
import {
  HoverCard, HoverCardTrigger, HoverCardContent,
} from '../components/ui/hover-card';
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbPage, BreadcrumbSeparator,
} from '../components/ui/breadcrumb';
import {
  Pagination, PaginationContent, PaginationItem, PaginationLink,
  PaginationPrevious, PaginationNext, PaginationEllipsis,
} from '../components/ui/pagination';
import {
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell,
} from '../components/ui/table';
import { ScrollArea } from '../components/ui/scroll-area';

export default function Components() {
  const [sliderValue, setSliderValue] = useState([50]);
  const [progressValue] = useState(72);

  return (
    <div className="space-y-16 lg:space-y-20">
      <div>
        <h1 className="text-4xl font-bold text-[var(--color-neutral-900)] mb-4 sm:mb-6">Components</h1>
        <p className="text-lg text-[var(--color-neutral-600)] max-w-3xl">
          30+ production-ready components built on Radix UI primitives with complete state
          variations. Each component follows our design principles of playfulness, warmth,
          trust, and minimalism.
        </p>
      </div>

      {/* ================================================================ */}
      {/* 1. BUTTONS                                                       */}
      {/* ================================================================ */}
      <ComponentSection title="Buttons" id="buttons">
        <ComponentDemo
          title="Button Variants"
          description="All semantic variants using the Button primitive"
          usage="Use default for primary CTA, secondary for supporting actions, outline for tertiary, destructive for danger zones, ghost and link for low-emphasis actions."
        >
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Button Sizes"
          description="Small, default, large, and icon-only"
          usage="Adapt button size to layout context and visual hierarchy."
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Add"><Plus /></Button>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Button States"
          description="Default, hover (try it), focus (Tab), and disabled"
          usage="Disabled buttons must never be the only way to communicate an error."
        >
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button className="ring-2 ring-ring ring-offset-2">Focus</Button>
            <Button disabled>Disabled</Button>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Icon Buttons"
          description="Buttons paired with Lucide icons for clarity"
          usage="Always provide an aria-label on icon-only buttons."
        >
          <div className="flex flex-wrap gap-3">
            <Button><Heart className="mr-2 h-4 w-4" /> Like</Button>
            <Button variant="secondary"><Star className="mr-2 h-4 w-4" /> Favorite</Button>
            <Button variant="outline"><Send className="mr-2 h-4 w-4" /> Send</Button>
            <Button variant="ghost" size="icon" aria-label="Download"><Download className="h-4 w-4" /></Button>
          </div>
        </ComponentDemo>

        <FigmaSpec
          component="Button"
          anatomy={['Root container', 'Leading icon (optional)', 'Label text', 'Trailing icon (optional)']}
          variants={{ variant: 'default | secondary | outline | destructive | ghost | link', size: 'sm | default | lg | icon' }}
          spacing="Horizontal padding: 16px (sm: 12px, lg: 32px). Vertical padding: 8px (sm: 6px, lg: 12px). Icon gap: 8px."
          typography="font-size: body-sm (14px), font-weight: medium (500), font-family: body."
          a11y="role=button, aria-disabled when disabled, visible focus ring on :focus-visible, min touch target 44×44px."
        />
      </ComponentSection>

      {/* ================================================================ */}
      {/* 2. FORM INPUTS                                                   */}
      {/* ================================================================ */}
      <ComponentSection title="Form Inputs" id="inputs">
        <ComponentDemo
          title="Text Input"
          description="Single-line input with label, placeholder, disabled, and error states"
          usage="Use for short text entries — names, emails, search queries."
        >
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="demo-name">Full Name</Label>
              <Input id="demo-name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="demo-disabled">Disabled</Label>
              <Input id="demo-disabled" placeholder="Cannot edit" disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="demo-error">Email (error)</Label>
              <Input id="demo-error" placeholder="Invalid" className="border-[var(--color-error-500)] focus-visible:ring-[var(--color-error-500)]" />
              <p className="text-sm text-[var(--color-error-500)]">Please enter a valid email address.</p>
            </div>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Textarea"
          description="Multi-line text field"
          usage="Use for longer text — messages, descriptions, feedback."
        >
          <div className="space-y-2 max-w-md">
            <Label htmlFor="demo-message">Message</Label>
            <Textarea id="demo-message" placeholder="Type your message here..." rows={4} />
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Select"
          description="Dropdown selection backed by Radix Select"
          usage="Use when picking one option from a predefined list."
        >
          <div className="space-y-2 max-w-md">
            <Label>Class</Label>
            <Select>
              <SelectTrigger className="w-full"><SelectValue placeholder="Choose a class" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="toddler">Toddler (2–3 yrs)</SelectItem>
                <SelectItem value="preschool">Preschool (3–4 yrs)</SelectItem>
                <SelectItem value="kinder">Kindergarten (4–5 yrs)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Checkbox"
          description="Multi-select toggle built on Radix Checkbox"
          usage="Use when users can select multiple options independently."
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Checkbox id="cb-1" defaultChecked />
              <Label htmlFor="cb-1">Arts & Crafts</Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="cb-2" />
              <Label htmlFor="cb-2">Music & Movement</Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="cb-3" disabled />
              <Label htmlFor="cb-3" className="text-[var(--color-neutral-400)]">Full (disabled)</Label>
            </div>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Radio Group"
          description="Single-select from mutually exclusive options"
          usage="Use when only one option may be selected."
        >
          <RadioGroup defaultValue="half-day">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="half-day" id="rg-1" />
              <Label htmlFor="rg-1">Half Day</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="full-day" id="rg-2" />
              <Label htmlFor="rg-2">Full Day</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="extended" id="rg-3" />
              <Label htmlFor="rg-3">Extended Care</Label>
            </div>
          </RadioGroup>
        </ComponentDemo>

        <ComponentDemo
          title="Switch"
          description="Binary toggle for instant-apply settings"
          usage="Use for on/off preferences that take effect immediately."
        >
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center justify-between">
              <Label htmlFor="sw-1">Email Notifications</Label>
              <Switch id="sw-1" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sw-2">Dark Mode</Label>
              <Switch id="sw-2" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sw-3" className="text-[var(--color-neutral-400)]">Locked</Label>
              <Switch id="sw-3" disabled />
            </div>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Slider"
          description="Continuous range selector"
          usage="Use for adjusting numeric values — volume, filter ranges, ages."
        >
          <div className="space-y-2 max-w-md">
            <div className="flex justify-between text-sm text-[var(--color-neutral-600)]">
              <Label>Age Range</Label>
              <span>{sliderValue[0]} years</span>
            </div>
            <Slider min={2} max={5} step={1} value={sliderValue} onValueChange={setSliderValue} />
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Search Input"
          description="Text input with leading search icon"
          usage="Use for search functionality."
        >
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-neutral-400)] h-4 w-4" />
            <Input className="pl-10" placeholder="Search students..." />
          </div>
        </ComponentDemo>

        <FigmaSpec
          component="Form Inputs"
          anatomy={['Label', 'Input container', 'Placeholder / value text', 'Helper text (optional)', 'Error text (optional)', 'Leading / trailing icon (optional)']}
          variants={{ state: 'default | focus | filled | disabled | error', size: 'default (h-9)' }}
          spacing="Label-to-input gap: 8px. Input padding: 12px horizontal, 8px vertical. Error text margin-top: 4px."
          typography="Label: body-sm (14px) medium. Input: body (16px) normal. Helper/Error: body-sm (14px)."
          a11y="Inputs linked to labels via htmlFor/id. Error state uses aria-invalid=true and aria-describedby pointing to error text. Disabled inputs use aria-disabled."
        />
      </ComponentSection>

      {/* ================================================================ */}
      {/* 3. CARDS                                                         */}
      {/* ================================================================ */}
      <ComponentSection title="Cards" id="cards">
        <ComponentDemo
          title="Basic Card"
          description="Simple content container with header and body"
          usage="Use for grouping related information."
        >
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>Welcome Back</CardTitle>
              <CardDescription>Here is today&apos;s schedule for your child.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-[var(--color-neutral-600)]">
                Morning circle starts at 8:30 AM, followed by outdoor play and art class.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">View Full Schedule</Button>
            </CardFooter>
          </Card>
        </ComponentDemo>

        <ComponentDemo
          title="Card with Image"
          description="Card featuring a visual media header"
          usage="Use for blog posts, program highlights, or galleries."
        >
          <Card className="max-w-sm overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-[var(--color-primary-300)] to-[var(--color-accent-300)]" />
            <CardHeader>
              <CardTitle>Art & Creativity</CardTitle>
              <CardDescription>Explore imagination through hands-on art projects.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm">Learn More</Button>
            </CardContent>
          </Card>
        </ComponentDemo>

        <ComponentDemo
          title="Stat Card"
          description="Metric display card for dashboards"
          usage="Use to surface key KPIs."
        >
          <Card className="max-w-xs bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)] text-white border-0">
            <CardHeader>
              <CardDescription className="text-white/80">Total Students</CardDescription>
              <CardTitle className="text-4xl text-white">1,234</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/80 flex items-center gap-1">
                <span className="text-green-300">↑ 12%</span> vs last month
              </p>
            </CardContent>
          </Card>
        </ComponentDemo>

        <FigmaSpec
          component="Card"
          anatomy={['Root container', 'CardHeader', 'CardTitle', 'CardDescription', 'CardContent', 'CardFooter', 'CardAction (optional)']}
          variants={{ style: 'default | elevated | gradient' }}
          spacing="Padding: 24px all sides. Header-to-content gap: 16px. Footer top border padding: 24px."
          typography="Title: heading-3 (24px) bold. Description: body-sm (14px) normal. Content: body (16px)."
          a11y="Use semantic heading levels inside CardTitle. Interactive cards should be wrapped in a <button> or <a> with appropriate role."
        />
      </ComponentSection>

      {/* ================================================================ */}
      {/* 4. NAVIGATION                                                    */}
      {/* ================================================================ */}
      <ComponentSection title="Navigation" id="navigation">
        <ComponentDemo
          title="Tabs"
          description="Horizontal tab navigation backed by Radix Tabs"
          usage="Use for switching between related views within the same context."
        >
          <Tabs defaultValue="schedule" className="max-w-lg">
            <TabsList>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="schedule" className="p-4 text-sm text-[var(--color-neutral-600)]">
              Today: Morning circle → Outdoor play → Art class → Lunch → Nap → Music
            </TabsContent>
            <TabsContent value="activities" className="p-4 text-sm text-[var(--color-neutral-600)]">
              Upcoming: Nature walk (Wed), Puppet show (Fri), Parent visit (Sat)
            </TabsContent>
            <TabsContent value="reports" className="p-4 text-sm text-[var(--color-neutral-600)]">
              Weekly progress reports are available every Friday.
            </TabsContent>
          </Tabs>
        </ComponentDemo>

        <ComponentDemo
          title="Breadcrumbs"
          description="Hierarchical navigation path"
          usage="Show the user's current location in the site hierarchy."
        >
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="#">Parents</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Resources</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ComponentDemo>

        <ComponentDemo
          title="Pagination"
          description="Multi-page navigation controls"
          usage="Use for paginated lists or search results."
        >
          <Pagination>
            <PaginationContent>
              <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
              <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
              <PaginationItem><PaginationEllipsis /></PaginationItem>
              <PaginationItem><PaginationNext href="#" /></PaginationItem>
            </PaginationContent>
          </Pagination>
        </ComponentDemo>

        <ComponentDemo
          title="Dropdown Menu"
          description="Contextual action menu built on Radix DropdownMenu"
          usage="Use for contextual options or overflow menus."
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline"><Settings className="mr-2 h-4 w-4" /> Options <ChevronDown className="ml-2 h-4 w-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Edit Profile</DropdownMenuItem>
              <DropdownMenuItem>View Schedule</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-[var(--color-error-500)]">Remove Child</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentDemo>

        <FigmaSpec
          component="Navigation"
          anatomy={['Tabs: TabsList + TabsTrigger + TabsContent', 'Breadcrumb: BreadcrumbList + BreadcrumbItem + BreadcrumbSeparator', 'Pagination: PaginationContent + PaginationItem + PaginationLink', 'DropdownMenu: Trigger + Content + Items + Separators']}
          variants={{ tabs: 'default | underlined', pagination: 'numbered | compact' }}
          spacing="Tab trigger padding: 12px 16px. Breadcrumb separator gap: 8px. Pagination item gap: 4px. Dropdown padding: 4px."
          typography="Tab trigger: body-sm (14px) medium. Breadcrumb: body-sm (14px). Dropdown item: body-sm (14px)."
          a11y="Tabs: role=tablist/tab/tabpanel with arrow-key navigation. Breadcrumb: nav[aria-label=breadcrumb]. DropdownMenu: fully keyboard-navigable, Escape to close."
        />
      </ComponentSection>

      {/* ================================================================ */}
      {/* 5. FEEDBACK & ALERTS                                             */}
      {/* ================================================================ */}
      <ComponentSection title="Feedback & Status" id="feedback">
        <ComponentDemo
          title="Alert"
          description="Contextual feedback messages using the Alert primitive"
          usage="Communicate status, warnings, errors, or informational messages."
        >
          <div className="space-y-3 max-w-2xl">
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Enrollment confirmed</AlertTitle>
              <AlertDescription>Your child has been registered for the Fall 2026 term.</AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Reminder</AlertTitle>
              <AlertDescription>Parent-teacher conference is scheduled for March 5.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Payment overdue</AlertTitle>
              <AlertDescription>Please update your billing information to avoid service interruption.</AlertDescription>
            </Alert>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Badge"
          description="Small status labels"
          usage="Use for counts, statuses, tags, or categories."
        >
          <div className="flex flex-wrap items-center gap-3">
            <Badge>New</Badge>
            <Badge variant="secondary">Active</Badge>
            <Badge variant="outline">Draft</Badge>
            <Badge variant="destructive">Urgent</Badge>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Progress"
          description="Visual completion indicator"
          usage="Show task progress, upload status, or learning milestones."
        >
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-[var(--color-neutral-700)]">
                <span>Learning milestones</span>
                <span>{progressValue}%</span>
              </div>
              <Progress value={progressValue} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-[var(--color-neutral-700)]">
                <span>Attendance</span>
                <span>100%</span>
              </div>
              <Progress value={100} />
            </div>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Skeleton"
          description="Loading placeholder that mimics content layout"
          usage="Show while content is being fetched — reduces perceived latency."
        >
          <div className="flex items-center gap-4 max-w-sm">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Loading Spinners"
          description="Animated activity indicators"
          usage="Use for indeterminate loading states."
        >
          <div className="flex flex-wrap items-center gap-6">
            <div className="w-8 h-8 border-4 border-[var(--color-neutral-200)] border-t-[var(--color-primary-500)] rounded-full animate-spin" />
            <div className="w-10 h-10 border-4 border-[var(--color-neutral-200)] border-t-[var(--color-accent-500)] rounded-full animate-spin" />
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 bg-[var(--color-primary-500)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2.5 h-2.5 bg-[var(--color-primary-500)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2.5 h-2.5 bg-[var(--color-primary-500)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </ComponentDemo>

        <FigmaSpec
          component="Feedback"
          anatomy={['Alert: container + icon + title + description', 'Badge: inline container + text', 'Progress: track + indicator', 'Skeleton: animated placeholder block']}
          variants={{ alert: 'default | destructive', badge: 'default | secondary | outline | destructive', progress: 'determinate | indeterminate' }}
          spacing="Alert padding: 16px. Badge padding: 4px 10px. Progress height: 8px."
          typography="Alert title: body-sm (14px) semibold. Alert description: body-sm (14px). Badge: caption (12px) medium."
          a11y="Alert: role=alert for important messages. Progress: role=progressbar, aria-valuenow, aria-valuemin, aria-valuemax. Skeleton: aria-hidden=true."
        />
      </ComponentSection>

      {/* ================================================================ */}
      {/* 6. MEDIA & DISPLAY                                               */}
      {/* ================================================================ */}
      <ComponentSection title="Media & Display" id="media">
        <ComponentDemo
          title="Avatar"
          description="User identity display with image and fallback"
          usage="Represent users, teachers, or student profiles."
        >
          <div className="flex flex-wrap items-end gap-4">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-gradient-to-br from-[var(--color-primary-400)] to-[var(--color-accent-400)] text-white text-xs">AB</AvatarFallback>
            </Avatar>
            <Avatar className="h-14 w-14">
              <AvatarFallback className="bg-gradient-to-br from-[var(--color-secondary-400)] to-[var(--color-primary-400)] text-white">JD</AvatarFallback>
            </Avatar>
            <Avatar className="h-20 w-20">
              <AvatarFallback className="bg-gradient-to-br from-[var(--color-accent-400)] to-[var(--color-secondary-400)] text-white text-xl">MK</AvatarFallback>
            </Avatar>
            <div className="relative">
              <Avatar className="h-14 w-14">
                <AvatarFallback className="bg-gradient-to-br from-[var(--color-primary-400)] to-[var(--color-accent-400)] text-white">ON</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[var(--color-success-500)] border-2 border-white rounded-full" />
            </div>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Separator"
          description="Visual divider between content sections"
          usage="Use to create clear visual boundaries."
        >
          <div className="space-y-4 max-w-md">
            <Separator />
            <div className="flex items-center gap-4">
              <Separator className="flex-1" />
              <span className="text-sm text-[var(--color-neutral-500)]">OR</span>
              <Separator className="flex-1" />
            </div>
            <Separator className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] h-0.5" />
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Scroll Area"
          description="Custom styled scrollbar container"
          usage="Use for overflowing content areas with a consistent scrollbar."
        >
          <ScrollArea className="h-40 w-full max-w-sm rounded-md border p-4">
            <div className="space-y-4">
              {Array.from({ length: 10 }, (_, i) => (
                <p key={i} className="text-sm text-[var(--color-neutral-600)]">
                  Student {i + 1}: Activity log entry for today&apos;s session. Participated in morning circle and art class.
                </p>
              ))}
            </div>
          </ScrollArea>
        </ComponentDemo>

        <ComponentDemo
          title="Hover Card"
          description="Rich preview on hover"
          usage="Show detailed previews without navigating away."
        >
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link" className="text-[var(--color-primary-600)]">@jasmine-kinder</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-72">
              <div className="flex gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-[var(--color-primary-100)] text-[var(--color-primary-700)]">JK</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-sm font-semibold">Jasmine Kindergarten</h4>
                  <p className="text-xs text-[var(--color-neutral-500)]">Joyful learning for children aged 2–5 in Indonesia.</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </ComponentDemo>

        <ComponentDemo
          title="Image Placeholder & Video"
          description="Placeholder content for media areas"
          usage="Use while media is loading or as fallback."
        >
          <div className="flex flex-wrap gap-4">
            <div className="w-48 h-36 bg-[var(--color-neutral-100)] rounded-lg flex items-center justify-center">
              <Eye className="h-8 w-8 text-[var(--color-neutral-400)]" />
            </div>
            <div className="relative w-48 h-36 bg-[var(--color-neutral-900)] rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="h-5 w-5 text-[var(--color-neutral-900)] ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        </ComponentDemo>

        <FigmaSpec
          component="Media & Display"
          anatomy={['Avatar: root + image + fallback + status dot (optional)', 'Separator: horizontal or vertical rule', 'ScrollArea: viewport + scrollbar + thumb', 'HoverCard: trigger + content panel']}
          variants={{ avatar: 'sm (32px) | md (40px) | lg (56px) | xl (80px)', separator: 'horizontal | vertical' }}
          spacing="Avatar status dot offset: -2px. ScrollArea padding: 16px. HoverCard content padding: 16px."
          typography="Avatar fallback: body-sm (14px) bold. HoverCard title: body-sm (14px) semibold."
          a11y="Avatar images need alt text. Separator uses role=separator. ScrollArea maintains native keyboard scrolling."
        />
      </ComponentSection>

      {/* ================================================================ */}
      {/* 7. DATA DISPLAY                                                  */}
      {/* ================================================================ */}
      <ComponentSection title="Data Display" id="data">
        <ComponentDemo
          title="Table"
          description="Structured tabular data using the Table primitive"
          usage="Use for lists, rosters, schedules, and structured records."
        >
          <div className="max-w-2xl">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Emma Johnson</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>Preschool</TableCell>
                  <TableCell><Badge variant="secondary">Active</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Liam Smith</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>Toddler</TableCell>
                  <TableCell><Badge variant="secondary">Active</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Sophia Brown</TableCell>
                  <TableCell>5</TableCell>
                  <TableCell>Kindergarten</TableCell>
                  <TableCell><Badge variant="outline">Pending</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </ComponentDemo>

        <FigmaSpec
          component="Table"
          anatomy={['Table root', 'TableHeader + TableRow + TableHead', 'TableBody + TableRow + TableCell', 'TableFooter (optional)', 'TableCaption (optional)']}
          variants={{ density: 'default | compact', bordered: 'true | false' }}
          spacing="Cell padding: 8px 16px. Header bottom border: 2px. Row border: 1px."
          typography="Header: body-sm (14px) medium, neutral-500. Cell: body-sm (14px) normal, neutral-700."
          a11y="Use semantic <table>, <thead>, <tbody> elements. Sortable columns should use aria-sort."
        />
      </ComponentSection>

      {/* ================================================================ */}
      {/* 8. OVERLAYS                                                      */}
      {/* ================================================================ */}
      <ComponentSection title="Overlays" id="overlays">
        <ComponentDemo
          title="Dialog"
          description="Modal overlay for focused interactions"
          usage="Use for confirmations, forms, or important messages that require attention."
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Enrollment</DialogTitle>
                <DialogDescription>Are you sure you want to enroll your child in the Fall 2026 program?</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
                <DialogClose asChild><Button>Confirm</Button></DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentDemo>

        <ComponentDemo
          title="Sheet"
          description="Slide-out panel from the edge of the screen"
          usage="Use for secondary content, filters, or mobile navigation."
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Notifications</SheetTitle>
                <SheetDescription>You have 3 unread messages from teachers.</SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-3">
                {['Art class update', 'Schedule change', 'Photo day reminder'].map((msg) => (
                  <div key={msg} className="flex items-center gap-3 p-3 bg-[var(--color-neutral-100)] rounded-lg">
                    <Bell className="h-4 w-4 text-[var(--color-primary-500)]" />
                    <span className="text-sm">{msg}</span>
                  </div>
                ))}
              </div>
              <SheetClose asChild><Button className="w-full">Mark All Read</Button></SheetClose>
            </SheetContent>
          </Sheet>
        </ComponentDemo>

        <ComponentDemo
          title="Tooltip"
          description="Contextual help text on hover/focus"
          usage="Provide brief additional information without cluttering the UI."
        >
          <TooltipProvider>
            <div className="flex gap-4">
              <Tooltip>
                <TooltipTrigger asChild><Button variant="outline" size="icon" aria-label="Copy"><Copy className="h-4 w-4" /></Button></TooltipTrigger>
                <TooltipContent><p>Copy to clipboard</p></TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild><Button variant="outline" size="icon" aria-label="Settings"><Settings className="h-4 w-4" /></Button></TooltipTrigger>
                <TooltipContent><p>Open settings</p></TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild><Button variant="outline" size="icon" aria-label="Notifications"><Bell className="h-4 w-4" /></Button></TooltipTrigger>
                <TooltipContent><p>3 new notifications</p></TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </ComponentDemo>

        <ComponentDemo
          title="Popover"
          description="Floating panel anchored to a trigger"
          usage="Use for forms, settings panels, or rich content that doesn't need a full dialog."
        >
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Quick Settings</Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Display Preferences</h4>
                <div className="flex items-center justify-between">
                  <Label htmlFor="pop-switch" className="text-sm">Dark mode</Label>
                  <Switch id="pop-switch" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="pop-switch2" className="text-sm">Compact view</Label>
                  <Switch id="pop-switch2" />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </ComponentDemo>

        <FigmaSpec
          component="Overlays"
          anatomy={['Dialog: overlay + content + header + body + footer', 'Sheet: overlay + sliding content panel', 'Tooltip: trigger + floating content', 'Popover: trigger + anchored content panel']}
          variants={{ dialog: 'default | destructive', sheet: 'side: left | right | top | bottom', tooltip: 'side: top | right | bottom | left' }}
          spacing="Dialog padding: 24px. Sheet padding: 24px. Tooltip padding: 6px 12px. Popover padding: 16px."
          typography="Dialog title: heading-3 (24px) semibold. Dialog description: body-sm (14px). Tooltip: body-sm (14px)."
          a11y="Dialog: focus-trapped, Escape to close, aria-labelledby/describedby. Sheet: same as dialog. Tooltip: role=tooltip, appears on hover and focus. Popover: focus-managed, Escape to close."
        />
      </ComponentSection>

      {/* ================================================================ */}
      {/* 9. TOGGLES & CONTROLS                                            */}
      {/* ================================================================ */}
      <ComponentSection title="Toggles & Controls" id="toggles">
        <ComponentDemo
          title="Toggle"
          description="Pressable state button"
          usage="Use for toggling formatting options, view modes, or preferences."
        >
          <div className="flex gap-2">
            <Toggle aria-label="Toggle bold"><Bold className="h-4 w-4" /></Toggle>
            <Toggle aria-label="Toggle italic"><Italic className="h-4 w-4" /></Toggle>
            <Toggle aria-label="Toggle underline"><Underline className="h-4 w-4" /></Toggle>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Toggle Group"
          description="Mutually exclusive group of toggle buttons"
          usage="Use for toolbar-style option groups like text alignment."
        >
          <ToggleGroup type="single" defaultValue="left">
            <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft className="h-4 w-4" /></ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter className="h-4 w-4" /></ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right"><AlignRight className="h-4 w-4" /></ToggleGroupItem>
          </ToggleGroup>
        </ComponentDemo>

        <FigmaSpec
          component="Toggle"
          anatomy={['Toggle root (pressed/unpressed)', 'Icon or label', 'ToggleGroup: group container + ToggleGroupItem']}
          variants={{ variant: 'default | outline', size: 'default | sm | lg', type: 'single | multiple' }}
          spacing="Toggle padding: 8px. Group gap: 0 (items touch). Border radius: md (8px)."
          typography="Toggle label: body-sm (14px) medium."
          a11y="aria-pressed for standalone toggle. ToggleGroup type=single uses role=radiogroup; type=multiple uses role=group with aria-pressed per item."
        />
      </ComponentSection>

      {/* ================================================================ */}
      {/* 10. ACCORDION                                                    */}
      {/* ================================================================ */}
      <ComponentSection title="Accordion" id="accordion">
        <ComponentDemo
          title="Collapsible FAQ"
          description="Vertically stacked expandable sections"
          usage="Use for FAQs, settings panels, or progressive disclosure."
        >
          <Accordion type="single" collapsible className="max-w-2xl">
            <AccordionItem value="hours">
              <AccordionTrigger>What are your hours of operation?</AccordionTrigger>
              <AccordionContent>
                We are open Monday through Friday, 7:00 AM to 6:00 PM. Extended care is available until 7:00 PM upon request.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="curriculum">
              <AccordionTrigger>What curriculum do you follow?</AccordionTrigger>
              <AccordionContent>
                We follow a play-based learning approach that integrates social-emotional development, early literacy, numeracy, and creative arts. Our curriculum is aligned with Indonesia&apos;s national early childhood education standards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="meals">
              <AccordionTrigger>Are meals included?</AccordionTrigger>
              <AccordionContent>
                Yes! We provide a nutritious morning snack, lunch, and afternoon snack. All meals are prepared fresh daily by our in-house kitchen. We accommodate common allergies and dietary requirements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentDemo>

        <FigmaSpec
          component="Accordion"
          anatomy={['Accordion root', 'AccordionItem', 'AccordionTrigger (header + chevron)', 'AccordionContent (collapsible body)']}
          variants={{ type: 'single (one open) | multiple (many open)', collapsible: 'true | false' }}
          spacing="Trigger padding: 16px vertical. Content padding: 0 0 16px. Item border-bottom: 1px."
          typography="Trigger: body (16px) medium. Content: body-sm (14px) normal."
          a11y="Each trigger is a button with aria-expanded. Content region has role=region and aria-labelledby pointing to trigger. Full keyboard support with Enter/Space to toggle."
        />
      </ComponentSection>

      {/* ================================================================ */}
      {/* 11. FILE UPLOAD & EMPTY STATE                                    */}
      {/* ================================================================ */}
      <ComponentSection title="Patterns" id="patterns">
        <ComponentDemo
          title="File Upload"
          description="Drag-and-drop file input area"
          usage="Use for document or image uploads."
        >
          <label className="flex flex-col items-center justify-center w-full max-w-md h-32 border-2 border-dashed border-[var(--color-neutral-300)] rounded-xl hover:border-[var(--color-primary-400)] hover:bg-[var(--color-primary-50)] transition-all cursor-pointer">
            <Upload className="h-8 w-8 text-[var(--color-neutral-400)] mb-2" />
            <p className="text-sm text-[var(--color-neutral-600)]">
              <span className="font-medium text-[var(--color-primary-600)]">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-[var(--color-neutral-500)]">PNG, JPG up to 10 MB</p>
            <input type="file" className="hidden" />
          </label>
        </ComponentDemo>

        <ComponentDemo
          title="Empty State"
          description="Placeholder when no data exists"
          usage="Guide users to take action when content is empty."
        >
          <div className="flex flex-col items-center justify-center p-12 bg-[var(--color-neutral-50)] rounded-xl max-w-md">
            <div className="w-16 h-16 bg-[var(--color-neutral-200)] rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-[var(--color-neutral-400)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-2">No results found</h3>
            <p className="text-sm text-[var(--color-neutral-600)] text-center mb-4">
              Try adjusting your search or filters to find what you&apos;re looking for.
            </p>
            <Button>Clear Filters</Button>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Tags / Chips"
          description="Removable inline labels"
          usage="Use for filters, selected items, or categories."
        >
          <div className="flex flex-wrap gap-2">
            <Badge className="gap-1 pl-3 pr-1.5 py-1">
              Design
              <button className="hover:bg-[var(--color-primary-200)]/20 rounded-full p-0.5"><X className="h-3 w-3" /></button>
            </Badge>
            <Badge variant="secondary" className="gap-1 pl-3 pr-1.5 py-1">
              Development
              <button className="hover:bg-[var(--color-neutral-300)] rounded-full p-0.5"><X className="h-3 w-3" /></button>
            </Badge>
            <Badge variant="outline" className="gap-1 pl-3 pr-1.5 py-1">
              Creative
              <button className="hover:bg-[var(--color-neutral-200)] rounded-full p-0.5"><X className="h-3 w-3" /></button>
            </Badge>
          </div>
        </ComponentDemo>

        <FigmaSpec
          component="Patterns"
          anatomy={['File Upload: drop zone + icon + label + helper text', 'Empty State: icon + heading + description + CTA', 'Tags: badge + close button']}
          variants={{ fileUpload: 'default | dragging | error', emptyState: 'search | no-data | error' }}
          spacing="Drop zone padding: 32px. Empty state padding: 48px. Tag padding: 4px 12px."
          typography="Drop zone label: body-sm (14px). Empty state heading: body-lg (18px) semibold. Tag: caption (12px) medium."
          a11y="File input is accessible via the label element. Empty state CTA is focusable. Tags use button[aria-label] for the remove action."
        />
      </ComponentSection>

      {/* ================================================================ */}
      {/* SUMMARY                                                          */}
      {/* ================================================================ */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-accent-50)] border border-[var(--color-primary-200)]">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">Component Library Summary</h2>
        <p className="text-[var(--color-neutral-700)] mb-6">
          This design system includes 35+ accessible, dark-mode-ready components covering all
          essential UI patterns. Every component is built on Radix UI primitives, styled with
          Tailwind CSS, and ships with Figma handoff specifications.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { count: '6', label: 'Button variants', color: 'var(--color-primary-600)' },
            { count: '8', label: 'Form inputs', color: 'var(--color-secondary-600)' },
            { count: '4', label: 'Card styles', color: 'var(--color-accent-600)' },
            { count: '17+', label: 'More components', color: 'var(--color-primary-600)' },
          ].map((stat) => (
            <div key={stat.label} className="p-4 bg-white dark:bg-[var(--color-neutral-100)] rounded-lg">
              <p className="text-2xl font-bold" style={{ color: stat.color }}>{stat.count}</p>
              <p className="text-sm text-[var(--color-neutral-600)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================================================================ */
/* Helper Components                                                 */
/* ================================================================ */

function ComponentSection({
  title,
  id,
  children,
}: {
  title: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="space-y-8">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-bold text-[var(--color-neutral-900)]">{title}</h2>
        <div className="flex-1 h-px bg-[var(--color-neutral-200)]" />
      </div>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

function ComponentDemo({
  title,
  description,
  usage,
  children,
}: {
  title: string;
  description: string;
  usage: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 bg-white border border-[var(--color-neutral-200)] rounded-xl dark:bg-[var(--color-neutral-100)]">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[var(--color-neutral-900)] mb-2">{title}</h3>
        <p className="text-sm text-[var(--color-neutral-600)] mb-1">{description}</p>
        <p className="text-xs text-[var(--color-neutral-500)]">
          <span className="font-medium">Usage:</span> {usage}
        </p>
      </div>
      <div className="p-6 bg-[var(--color-neutral-50)] rounded-lg">{children}</div>
    </div>
  );
}

function FigmaSpec({
  component,
  anatomy,
  variants,
  spacing,
  typography,
  a11y,
}: {
  component: string;
  anatomy: string[];
  variants: Record<string, string>;
  spacing: string;
  typography: string;
  a11y: string;
}) {
  return (
    <details className="group bg-[var(--color-secondary-50)] border border-[var(--color-secondary-200)] rounded-xl overflow-hidden dark:bg-[var(--color-neutral-100)] dark:border-[var(--color-neutral-200)]">
      <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between hover:bg-[var(--color-secondary-100)] transition-colors dark:hover:bg-[var(--color-neutral-200)]">
        <span className="font-semibold text-[var(--color-neutral-900)] text-sm">
          Figma Handoff — {component}
        </span>
        <ChevronDown className="h-4 w-4 text-[var(--color-neutral-500)] group-open:rotate-180 transition-transform" />
      </summary>
      <div className="px-6 pb-6 grid md:grid-cols-2 gap-6 text-sm">
        <div>
          <h4 className="font-semibold text-[var(--color-neutral-800)] mb-2">Anatomy</h4>
          <ul className="space-y-1 text-[var(--color-neutral-600)]">
            {anatomy.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[var(--color-secondary-500)] mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[var(--color-neutral-800)] mb-2">Variants</h4>
          <ul className="space-y-1 text-[var(--color-neutral-600)]">
            {Object.entries(variants).map(([key, value]) => (
              <li key={key}>
                <code className="text-xs bg-[var(--color-neutral-100)] px-1.5 py-0.5 rounded">{key}</code>: {value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-[var(--color-neutral-800)] mb-2">Spacing</h4>
          <p className="text-[var(--color-neutral-600)]">{spacing}</p>
        </div>
        <div>
          <h4 className="font-semibold text-[var(--color-neutral-800)] mb-2">Typography</h4>
          <p className="text-[var(--color-neutral-600)]">{typography}</p>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-semibold text-[var(--color-neutral-800)] mb-2">Accessibility</h4>
          <p className="text-[var(--color-neutral-600)]">{a11y}</p>
        </div>
      </div>
    </details>
  );
}
