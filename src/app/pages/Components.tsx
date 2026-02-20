import { useState } from 'react';
import { 
  Heart, Star, Send, Download, Plus, X, Check, ChevronDown, 
  Search, Bell, User, Menu, Home, Settings, AlertCircle, 
  CheckCircle, XCircle, Info, Play, Upload, Eye
} from 'lucide-react';
import { PhotoGalleryGrid } from '../components/ui/photo-gallery-grid';

export default function Components() {
  const [checkboxStates, setCheckboxStates] = useState<Record<string, boolean>>({});
  const [radioValue, setRadioValue] = useState('option1');
  const [switchStates, setSwitchStates] = useState<Record<string, boolean>>({});
  const [sliderValue, setSliderValue] = useState(50);
  const [selectValue, setSelectValue] = useState('option1');
  const [showModal, setShowModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleCheckbox = (id: string) => {
    setCheckboxStates(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSwitch = (id: string) => {
    setSwitchStates(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-[var(--color-neutral-900)] mb-3">Components</h1>
        <p className="text-lg text-[var(--color-neutral-600)] max-w-3xl">
          30+ production-ready components with complete state variations. Each component follows our design 
          principles of playfulness, warmth, trust, and minimalism.
        </p>
      </div>

      {/* BUTTONS */}
      <ComponentSection title="Buttons" id="buttons">
        <ComponentDemo
          title="Primary Button"
          description="Main call-to-action buttons with high emphasis"
          usage="Use for primary actions like 'Submit', 'Save', 'Continue'"
        >
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-3 bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] active:bg-[var(--color-primary-700)] text-white rounded-lg font-medium transition-colors shadow-sm hover:shadow-md">
              Default
            </button>
            <button className="px-6 py-3 bg-[var(--color-primary-600)] text-white rounded-lg font-medium shadow-md">
              Hover
            </button>
            <button className="px-6 py-3 bg-[var(--color-primary-700)] text-white rounded-lg font-medium shadow-md">
              Active
            </button>
            <button className="px-6 py-3 bg-[var(--color-primary-500)] text-white rounded-lg font-medium ring-2 ring-[var(--color-primary-300)] ring-offset-2">
              Focus
            </button>
            <button className="px-6 py-3 bg-[var(--color-neutral-200)] text-[var(--color-neutral-400)] rounded-lg font-medium cursor-not-allowed" disabled>
              Disabled
            </button>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Secondary Button"
          description="Supporting actions with medium emphasis"
          usage="Use for secondary actions like 'Cancel', 'Back', 'Learn More'"
        >
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-3 bg-[var(--color-secondary-100)] hover:bg-[var(--color-secondary-200)] active:bg-[var(--color-secondary-300)] text-[var(--color-secondary-700)] rounded-lg font-medium transition-colors">
              Default
            </button>
            <button className="px-6 py-3 bg-[var(--color-secondary-200)] text-[var(--color-secondary-700)] rounded-lg font-medium">
              Hover
            </button>
            <button className="px-6 py-3 bg-[var(--color-secondary-300)] text-[var(--color-secondary-800)] rounded-lg font-medium">
              Active
            </button>
            <button className="px-6 py-3 bg-[var(--color-neutral-200)] text-[var(--color-neutral-400)] rounded-lg font-medium cursor-not-allowed" disabled>
              Disabled
            </button>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Outline Button"
          description="Subtle actions with low emphasis"
          usage="Use for tertiary actions or when background contrast is needed"
        >
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-3 border-2 border-[var(--color-primary-500)] hover:bg-[var(--color-primary-50)] active:bg-[var(--color-primary-100)] text-[var(--color-primary-600)] rounded-lg font-medium transition-colors">
              Default
            </button>
            <button className="px-6 py-3 border-2 border-[var(--color-primary-500)] bg-[var(--color-primary-50)] text-[var(--color-primary-600)] rounded-lg font-medium">
              Hover
            </button>
            <button className="px-6 py-3 border-2 border-[var(--color-neutral-300)] text-[var(--color-neutral-400)] rounded-lg font-medium cursor-not-allowed" disabled>
              Disabled
            </button>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Icon Buttons"
          description="Buttons with icons for compact actions"
          usage="Use for toolbars, navigation, or space-constrained interfaces"
        >
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-3 bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white rounded-lg transition-colors flex items-center gap-2">
              <Heart size={20} />
              <span>Like</span>
            </button>
            <button className="px-4 py-3 bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white rounded-lg transition-colors flex items-center gap-2">
              <Star size={20} />
              <span>Favorite</span>
            </button>
            <button className="p-3 bg-[var(--color-secondary-100)] hover:bg-[var(--color-secondary-200)] text-[var(--color-secondary-700)] rounded-lg transition-colors">
              <Send size={20} />
            </button>
            <button className="p-3 bg-[var(--color-neutral-100)] hover:bg-[var(--color-neutral-200)] text-[var(--color-neutral-700)] rounded-lg transition-colors">
              <Download size={20} />
            </button>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Button Sizes"
          description="Small, medium, and large button variants"
          usage="Adapt button size to context and hierarchy"
        >
          <div className="flex flex-wrap items-center gap-3">
            <button className="px-3 py-1.5 bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white text-sm rounded-lg transition-colors">
              Small
            </button>
            <button className="px-6 py-3 bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white rounded-lg transition-colors">
              Medium
            </button>
            <button className="px-8 py-4 bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white text-lg rounded-lg transition-colors">
              Large
            </button>
          </div>
        </ComponentDemo>
      </ComponentSection>

      {/* INPUTS */}
      <ComponentSection title="Form Inputs" id="inputs">
        <ComponentDemo
          title="Text Input"
          description="Single-line text input fields"
          usage="Use for short text entries like names, emails, etc."
        >
          <div className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-2">
                Default State
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-2">
                Filled State
              </label>
              <input
                type="text"
                value="John Doe"
                readOnly
                className="w-full px-4 py-3 border border-[var(--color-neutral-300)] rounded-lg bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-2">
                Disabled State
              </label>
              <input
                type="text"
                placeholder="Disabled input"
                disabled
                className="w-full px-4 py-3 border border-[var(--color-neutral-200)] rounded-lg bg-[var(--color-neutral-100)] text-[var(--color-neutral-400)] cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-2">
                Error State
              </label>
              <input
                type="text"
                placeholder="Invalid input"
                className="w-full px-4 py-3 border-2 border-[var(--color-error-500)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-error-500)]"
              />
              <p className="text-sm text-[var(--color-error-500)] mt-1">This field is required</p>
            </div>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Textarea"
          description="Multi-line text input"
          usage="Use for longer text entries like messages or descriptions"
        >
          <div className="max-w-md">
            <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-2">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Enter your message..."
              className="w-full px-4 py-3 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-all resize-none"
            />
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Select Dropdown"
          description="Dropdown selection input"
          usage="Use when users need to select from a predefined list"
        >
          <div className="max-w-md">
            <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-2">
              Choose an option
            </label>
            <div className="relative">
              <select
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                className="w-full px-4 py-3 pr-10 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent appearance-none bg-white transition-all"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-neutral-500)] pointer-events-none" size={20} />
            </div>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Checkbox"
          description="Multiple selection inputs"
          usage="Use when users can select multiple options"
        >
          <div className="space-y-3">
            {['checkbox1', 'checkbox2', 'checkbox3'].map((id, index) => (
              <label key={id} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={checkboxStates[id] || false}
                    onChange={() => toggleCheckbox(id)}
                    className="peer sr-only"
                  />
                  <div className="w-5 h-5 border-2 border-[var(--color-neutral-300)] rounded peer-checked:bg-[var(--color-primary-500)] peer-checked:border-[var(--color-primary-500)] peer-focus:ring-2 peer-focus:ring-[var(--color-primary-300)] transition-all flex items-center justify-center">
                    {checkboxStates[id] && <Check size={14} className="text-white" />}
                  </div>
                </div>
                <span className="text-[var(--color-neutral-700)] group-hover:text-[var(--color-neutral-900)]">
                  Checkbox Option {index + 1}
                </span>
              </label>
            ))}
            <label className="flex items-center gap-3 cursor-not-allowed opacity-50">
              <div className="w-5 h-5 border-2 border-[var(--color-neutral-300)] rounded bg-[var(--color-neutral-100)]" />
              <span className="text-[var(--color-neutral-500)]">Disabled Checkbox</span>
            </label>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Radio Button"
          description="Single selection from multiple options"
          usage="Use when users can select only one option from a group"
        >
          <div className="space-y-3">
            {['option1', 'option2', 'option3'].map((id, index) => (
              <label key={id} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="radio"
                    name="radio-group"
                    checked={radioValue === id}
                    onChange={() => setRadioValue(id)}
                    className="peer sr-only"
                  />
                  <div className="w-5 h-5 border-2 border-[var(--color-neutral-300)] rounded-full peer-checked:border-[var(--color-primary-500)] peer-focus:ring-2 peer-focus:ring-[var(--color-primary-300)] transition-all flex items-center justify-center">
                    {radioValue === id && (
                      <div className="w-2.5 h-2.5 bg-[var(--color-primary-500)] rounded-full" />
                    )}
                  </div>
                </div>
                <span className="text-[var(--color-neutral-700)] group-hover:text-[var(--color-neutral-900)]">
                  Radio Option {index + 1}
                </span>
              </label>
            ))}
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Switch Toggle"
          description="Binary on/off controls"
          usage="Use for settings and preferences that take effect immediately"
        >
          <div className="space-y-4">
            {['switch1', 'switch2'].map((id, index) => (
              <label key={id} className="flex items-center justify-between cursor-pointer group max-w-md">
                <span className="text-[var(--color-neutral-700)]">Enable Feature {index + 1}</span>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={switchStates[id] || false}
                    onChange={() => toggleSwitch(id)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[var(--color-neutral-300)] rounded-full peer-checked:bg-[var(--color-primary-500)] peer-focus:ring-2 peer-focus:ring-[var(--color-primary-300)] transition-all">
                    <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${switchStates[id] ? 'translate-x-5' : ''}`} />
                  </div>
                </div>
              </label>
            ))}
            <label className="flex items-center justify-between cursor-not-allowed opacity-50 max-w-md">
              <span className="text-[var(--color-neutral-500)]">Disabled Switch</span>
              <div className="w-11 h-6 bg-[var(--color-neutral-200)] rounded-full">
                <div className="absolute w-5 h-5 bg-white rounded-full shadow top-0.5 left-0.5" />
              </div>
            </label>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Slider"
          description="Range input for numeric values"
          usage="Use for adjusting settings like volume, brightness, or filters"
        >
          <div className="max-w-md space-y-2">
            <label className="block text-sm font-medium text-[var(--color-neutral-700)]">
              Value: {sliderValue}
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-full h-2 bg-[var(--color-neutral-200)] rounded-lg appearance-none cursor-pointer slider-thumb"
              style={{
                background: `linear-gradient(to right, var(--color-primary-500) 0%, var(--color-primary-500)) ${sliderValue}%, var(--color-neutral-200) ${sliderValue}%, var(--color-neutral-200) 100%)`
              }}
            />
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Search Input"
          description="Search input with icon"
          usage="Use for search functionality"
        >
          <div className="max-w-md relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-neutral-400)]" size={20} />
            <input
              type="search"
              placeholder="Search..."
              className="w-full pl-12 pr-4 py-3 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-all"
            />
          </div>
        </ComponentDemo>
      </ComponentSection>

      {/* CARDS */}
      <ComponentSection title="Cards" id="cards">
        <ComponentDemo
          title="Basic Card"
          description="Simple content container"
          usage="Use for grouping related information"
        >
          <div className="max-w-sm p-6 bg-white border border-[var(--color-neutral-200)] rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-2">Card Title</h3>
            <p className="text-[var(--color-neutral-600)] mb-4">
              This is a basic card component with title and description content.
            </p>
            <button className="text-[var(--color-primary-600)] font-medium hover:text-[var(--color-primary-700)]">
              Learn More →
            </button>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Card with Image"
          description="Card with visual media"
          usage="Use for blog posts, products, or visual content"
        >
          <div className="max-w-sm bg-white border border-[var(--color-neutral-200)] rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-[var(--color-primary-300)] to-[var(--color-accent-300)]" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[var(--color-neutral-900)] mb-2">Image Card</h3>
              <p className="text-[var(--color-neutral-600)] mb-4">
                Beautiful card design with image header for visual appeal.
              </p>
              <button className="px-4 py-2 bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white rounded-lg transition-colors">
                View Details
              </button>
            </div>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Interactive Card"
          description="Clickable card with hover effects"
          usage="Use for navigation or selectable items"
        >
          <button className="max-w-sm p-6 bg-white border-2 border-[var(--color-neutral-200)] rounded-xl shadow-sm hover:shadow-lg hover:border-[var(--color-primary-300)] hover:-translate-y-1 transition-all text-left">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[var(--color-primary-100)] rounded-xl">
                <Star size={24} className="text-[var(--color-primary-600)]" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[var(--color-neutral-900)] mb-1">Interactive Card</h3>
                <p className="text-sm text-[var(--color-neutral-600)]">
                  Entire card is clickable with smooth hover animation
                </p>
              </div>
            </div>
          </button>
        </ComponentDemo>

        <ComponentDemo
          title="Stat Card"
          description="Card for displaying metrics and statistics"
          usage="Use in dashboards for key metrics"
        >
          <div className="max-w-xs p-6 bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)] rounded-xl shadow-lg text-white">
            <p className="text-sm opacity-90 mb-1">Total Students</p>
            <p className="text-4xl font-bold mb-2">1,234</p>
            <p className="text-sm opacity-80 flex items-center gap-1">
              <span className="text-green-300">↑ 12%</span> vs last month
            </p>
          </div>
        </ComponentDemo>
      </ComponentSection>

      {/* NAVIGATION */}
      <ComponentSection title="Navigation" id="navigation">
        <ComponentDemo
          title="Navigation Tabs"
          description="Horizontal tab navigation"
          usage="Use for switching between related views"
        >
          <div className="flex gap-1 p-1 bg-[var(--color-neutral-100)] rounded-lg w-fit">
            <button className="px-6 py-2 bg-white text-[var(--color-neutral-900)] rounded-md shadow-sm font-medium">
              Active
            </button>
            <button className="px-6 py-2 text-[var(--color-neutral-600)] hover:text-[var(--color-neutral-900)] rounded-md transition-colors">
              Tab 2
            </button>
            <button className="px-6 py-2 text-[var(--color-neutral-600)] hover:text-[var(--color-neutral-900)] rounded-md transition-colors">
              Tab 3
            </button>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Breadcrumbs"
          description="Navigation path indicator"
          usage="Use to show current location in hierarchy"
        >
          <nav className="flex items-center gap-2 text-sm">
            <a href="#" className="text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)]">Home</a>
            <span className="text-[var(--color-neutral-400)]">/</span>
            <a href="#" className="text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)]">Parents</a>
            <span className="text-[var(--color-neutral-400)]">/</span>
            <span className="text-[var(--color-neutral-700)]">Resources</span>
          </nav>
        </ComponentDemo>

        <ComponentDemo
          title="Pagination"
          description="Page navigation controls"
          usage="Use for multi-page content"
        >
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 border border-[var(--color-neutral-300)] rounded-lg text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)] transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 bg-[var(--color-primary-500)] text-white rounded-lg font-medium">1</button>
            <button className="px-4 py-2 border border-[var(--color-neutral-300)] rounded-lg text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)] transition-colors">2</button>
            <button className="px-4 py-2 border border-[var(--color-neutral-300)] rounded-lg text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)] transition-colors">3</button>
            <button className="px-4 py-2 border border-[var(--color-neutral-300)] rounded-lg text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)] transition-colors">
              Next
            </button>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Icon Navigation"
          description="Icon-based navigation menu"
          usage="Use for bottom navigation or side menus"
        >
          <div className="flex gap-2 p-2 bg-white border border-[var(--color-neutral-200)] rounded-xl shadow-sm w-fit">
            <button className="p-3 bg-[var(--color-primary-100)] text-[var(--color-primary-600)] rounded-lg">
              <Home size={20} />
            </button>
            <button className="p-3 text-[var(--color-neutral-500)] hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors">
              <Search size={20} />
            </button>
            <button className="p-3 text-[var(--color-neutral-500)] hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors">
              <Bell size={20} />
            </button>
            <button className="p-3 text-[var(--color-neutral-500)] hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors">
              <User size={20} />
            </button>
          </div>
        </ComponentDemo>
      </ComponentSection>

      {/* FEEDBACK */}
      <ComponentSection title="Feedback & Alerts" id="feedback">
        <ComponentDemo
          title="Alert Messages"
          description="Feedback messages for different states"
          usage="Use to communicate status, warnings, or errors"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-start gap-3 p-4 bg-[var(--color-success-50)] border border-[var(--color-success-200)] rounded-lg">
              <CheckCircle size={20} className="text-[var(--color-success-600)] mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-[var(--color-success-800)]">Success</p>
                <p className="text-sm text-[var(--color-success-700)]">Your changes have been saved successfully.</p>
              </div>
              <button className="text-[var(--color-success-600)] hover:text-[var(--color-success-800)]">
                <X size={18} />
              </button>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[var(--color-info-50)] border border-[var(--color-info-200)] rounded-lg">
              <Info size={20} className="text-[var(--color-info-600)] mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-[var(--color-info-800)]">Information</p>
                <p className="text-sm text-[var(--color-info-700)]">New features are now available. Check them out!</p>
              </div>
              <button className="text-[var(--color-info-600)] hover:text-[var(--color-info-800)]">
                <X size={18} />
              </button>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[var(--color-warning-50)] border border-[var(--color-warning-200)] rounded-lg">
              <AlertCircle size={20} className="text-[var(--color-warning-600)] mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-[var(--color-warning-800)]">Warning</p>
                <p className="text-sm text-[var(--color-warning-700)]">Please review your information before submitting.</p>
              </div>
              <button className="text-[var(--color-warning-600)] hover:text-[var(--color-warning-800)]">
                <X size={18} />
              </button>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[var(--color-error-50)] border border-[var(--color-error-200)] rounded-lg">
              <XCircle size={20} className="text-[var(--color-error-600)] mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-[var(--color-error-800)]">Error</p>
                <p className="text-sm text-[var(--color-error-700)]">There was an error processing your request.</p>
              </div>
              <button className="text-[var(--color-error-600)] hover:text-[var(--color-error-800)]">
                <X size={18} />
              </button>
            </div>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Progress Bar"
          description="Visual progress indicator"
          usage="Use to show task completion or loading progress"
        >
          <div className="space-y-4 max-w-md">
            <div>
              <div className="flex justify-between text-sm text-[var(--color-neutral-700)] mb-2">
                <span>Progress</span>
                <span>75%</span>
              </div>
              <div className="h-2 bg-[var(--color-neutral-200)] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] rounded-full" style={{ width: '75%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-[var(--color-neutral-700)] mb-2">
                <span>Loading</span>
                <span>50%</span>
              </div>
              <div className="h-3 bg-[var(--color-neutral-200)] rounded-full overflow-hidden">
                <div className="h-full bg-[var(--color-secondary-500)] rounded-full" style={{ width: '50%' }} />
              </div>
            </div>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Loading Spinners"
          description="Loading state indicators"
          usage="Use to indicate content is loading"
        >
          <div className="flex flex-wrap items-center gap-6">
            <div className="w-8 h-8 border-4 border-[var(--color-neutral-200)] border-t-[var(--color-primary-500)] rounded-full animate-spin" />
            <div className="w-10 h-10 border-4 border-[var(--color-neutral-200)] border-t-[var(--color-accent-500)] rounded-full animate-spin" />
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-[var(--color-primary-500)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-3 h-3 bg-[var(--color-primary-500)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-3 h-3 bg-[var(--color-primary-500)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Badge"
          description="Small status indicators"
          usage="Use for counts, statuses, or labels"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-[var(--color-primary-100)] text-[var(--color-primary-700)] text-sm font-medium rounded-full">
              New
            </span>
            <span className="px-3 py-1 bg-[var(--color-success-100)] text-[var(--color-success-700)] text-sm font-medium rounded-full">
              Active
            </span>
            <span className="px-3 py-1 bg-[var(--color-warning-100)] text-[var(--color-warning-700)] text-sm font-medium rounded-full">
              Pending
            </span>
            <span className="px-3 py-1 bg-[var(--color-error-100)] text-[var(--color-error-700)] text-sm font-medium rounded-full">
              Closed
            </span>
            <span className="px-2 py-0.5 bg-[var(--color-accent-500)] text-white text-xs font-bold rounded-full">
              99+
            </span>
          </div>
        </ComponentDemo>
      </ComponentSection>

      {/* MEDIA & AVATARS */}
      <ComponentSection title="Media & Avatars" id="media">
        <ComponentDemo
          title="Avatar"
          description="User profile images"
          usage="Use to represent users or accounts"
        >
          <div className="flex flex-wrap items-end gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary-400)] to-[var(--color-accent-400)] rounded-full flex items-center justify-center text-white font-bold">
              AB
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary-400)] to-[var(--color-primary-400)] rounded-full flex items-center justify-center text-white font-bold text-lg">
              JD
            </div>
            <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-accent-400)] to-[var(--color-secondary-400)] rounded-full flex items-center justify-center text-white font-bold text-xl">
              MK
            </div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary-400)] to-[var(--color-accent-400)] rounded-full" />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-[var(--color-success-500)] border-2 border-white rounded-full" />
            </div>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Image Placeholder"
          description="Placeholder for images"
          usage="Use while images are loading or unavailable"
        >
          <div className="space-y-4">
            <div className="w-64 h-48 bg-[var(--color-neutral-100)] rounded-lg flex items-center justify-center">
              <Eye size={32} className="text-[var(--color-neutral-400)]" />
            </div>
            <div className="w-32 h-32 bg-gradient-to-br from-[var(--color-primary-200)] to-[var(--color-accent-200)] rounded-xl" />
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Video Placeholder"
          description="Video player placeholder"
          usage="Use for video content areas"
        >
          <div className="relative w-full max-w-md aspect-video bg-[var(--color-neutral-900)] rounded-xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-500)]/20 to-[var(--color-accent-500)]/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={28} className="text-[var(--color-neutral-900)] ml-1" />
              </div>
            </div>
          </div>
        </ComponentDemo>
      </ComponentSection>

      {/* DATA DISPLAY */}
      <ComponentSection title="Data Display" id="data">
        <ComponentDemo
          title="Simple Table"
          description="Tabular data display"
          usage="Use for structured data presentation"
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-[var(--color-neutral-300)]">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--color-neutral-900)]">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--color-neutral-900)]">Age</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--color-neutral-900)]">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-neutral-200)] hover:bg-[var(--color-neutral-50)] transition-colors">
                  <td className="px-4 py-3 text-sm text-[var(--color-neutral-700)]">Emma Johnson</td>
                  <td className="px-4 py-3 text-sm text-[var(--color-neutral-700)]">4</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 bg-[var(--color-success-100)] text-[var(--color-success-700)] text-xs rounded-full">Active</span>
                  </td>
                </tr>
                <tr className="border-b border-[var(--color-neutral-200)] hover:bg-[var(--color-neutral-50)] transition-colors">
                  <td className="px-4 py-3 text-sm text-[var(--color-neutral-700)]">Liam Smith</td>
                  <td className="px-4 py-3 text-sm text-[var(--color-neutral-700)]">3</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 bg-[var(--color-success-100)] text-[var(--color-success-700)] text-xs rounded-full">Active</span>
                  </td>
                </tr>
                <tr className="hover:bg-[var(--color-neutral-50)] transition-colors">
                  <td className="px-4 py-3 text-sm text-[var(--color-neutral-700)]">Sophia Brown</td>
                  <td className="px-4 py-3 text-sm text-[var(--color-neutral-700)]">5</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 bg-[var(--color-warning-100)] text-[var(--color-warning-700)] text-xs rounded-full">Pending</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="List Items"
          description="Vertical list with actions"
          usage="Use for menus, options, or content lists"
        >
          <div className="space-y-2 max-w-md">
            <button className="w-full flex items-center justify-between p-4 bg-white border border-[var(--color-neutral-200)] rounded-lg hover:border-[var(--color-primary-300)] hover:shadow-sm transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--color-primary-100)] rounded-lg flex items-center justify-center">
                  <Settings size={20} className="text-[var(--color-primary-600)]" />
                </div>
                <div>
                  <p className="font-medium text-[var(--color-neutral-900)]">Settings</p>
                  <p className="text-sm text-[var(--color-neutral-500)]">Manage preferences</p>
                </div>
              </div>
              <ChevronDown size={20} className="text-[var(--color-neutral-400)] -rotate-90" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-white border border-[var(--color-neutral-200)] rounded-lg hover:border-[var(--color-primary-300)] hover:shadow-sm transition-all text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--color-secondary-100)] rounded-lg flex items-center justify-center">
                  <Bell size={20} className="text-[var(--color-secondary-600)]" />
                </div>
                <div>
                  <p className="font-medium text-[var(--color-neutral-900)]">Notifications</p>
                  <p className="text-sm text-[var(--color-neutral-500)]">3 new messages</p>
                </div>
              </div>
              <span className="px-2 py-0.5 bg-[var(--color-error-500)] text-white text-xs font-bold rounded-full">3</span>
            </button>
          </div>
        </ComponentDemo>
      </ComponentSection>

      {/* OVERLAYS */}
      <ComponentSection title="Overlays & Modals" id="overlays">
        <ComponentDemo
          title="Modal Dialog"
          description="Overlay dialog for focused interactions"
          usage="Use for confirmations, forms, or important messages"
        >
          <div>
            <button 
              onClick={() => setShowModal(true)}
              className="px-6 py-3 bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white rounded-lg transition-colors"
            >
              Open Modal
            </button>

            {showModal && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-in fade-in duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-[var(--color-neutral-900)]">Modal Title</h3>
                    <button 
                      onClick={() => setShowModal(false)}
                      className="p-1 hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <p className="text-[var(--color-neutral-600)] mb-6">
                    This is a modal dialog. It captures user focus and requires interaction before continuing.
                  </p>
                  <div className="flex gap-3 justify-end">
                    <button 
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 border border-[var(--color-neutral-300)] text-[var(--color-neutral-700)] rounded-lg hover:bg-[var(--color-neutral-100)] transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white rounded-lg transition-colors"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Tooltip"
          description="Contextual help text"
          usage="Use for additional information on hover"
        >
          <div className="relative inline-block">
            <button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="px-4 py-2 bg-[var(--color-neutral-100)] hover:bg-[var(--color-neutral-200)] text-[var(--color-neutral-700)] rounded-lg transition-colors"
            >
              Hover me
            </button>
            {showTooltip && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[var(--color-neutral-900)] text-white text-sm rounded-lg whitespace-nowrap">
                Helpful tooltip text
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[var(--color-neutral-900)]" />
              </div>
            )}
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Dropdown Menu"
          description="Contextual menu overlay"
          usage="Use for action menus or option lists"
        >
          <div className="relative inline-block">
            <button className="px-4 py-2 bg-white border border-[var(--color-neutral-300)] rounded-lg hover:bg-[var(--color-neutral-50)] transition-colors flex items-center gap-2">
              <Menu size={18} />
              <span>Menu</span>
              <ChevronDown size={16} />
            </button>
            <div className="mt-2 w-48 bg-white border border-[var(--color-neutral-200)] rounded-lg shadow-lg py-2">
              <button className="w-full px-4 py-2 text-left text-sm text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)] transition-colors">
                Edit
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)] transition-colors">
                Duplicate
              </button>
              <div className="my-2 border-t border-[var(--color-neutral-200)]" />
              <button className="w-full px-4 py-2 text-left text-sm text-[var(--color-error-600)] hover:bg-[var(--color-error-50)] transition-colors">
                Delete
              </button>
            </div>
          </div>
        </ComponentDemo>
      </ComponentSection>

      {/* MISC COMPONENTS */}
      <ComponentSection title="Additional Components" id="misc">
        <ComponentDemo
          title="Divider"
          description="Visual content separator"
          usage="Use to separate content sections"
        >
          <div className="space-y-4 max-w-md">
            <div className="h-px bg-[var(--color-neutral-200)]" />
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-[var(--color-neutral-200)]" />
              <span className="text-sm text-[var(--color-neutral-500)]">OR</span>
              <div className="flex-1 h-px bg-[var(--color-neutral-200)]" />
            </div>
            <div className="h-0.5 bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] rounded-full" />
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Tags / Chips"
          description="Removable labels"
          usage="Use for filters, selected items, or categories"
        >
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-primary-100)] text-[var(--color-primary-700)] text-sm rounded-full">
              Design
              <button className="hover:bg-[var(--color-primary-200)] rounded-full p-0.5 transition-colors">
                <X size={14} />
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-secondary-100)] text-[var(--color-secondary-700)] text-sm rounded-full">
              Development
              <button className="hover:bg-[var(--color-secondary-200)] rounded-full p-0.5 transition-colors">
                <X size={14} />
              </button>
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-accent-100)] text-[var(--color-accent-700)] text-sm rounded-full">
              Creative
              <button className="hover:bg-[var(--color-accent-200)] rounded-full p-0.5 transition-colors">
                <X size={14} />
              </button>
            </span>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Accordion"
          description="Expandable content sections"
          usage="Use for FAQs or collapsible content"
        >
          <div className="space-y-2 max-w-2xl">
            <details className="group bg-white border border-[var(--color-neutral-200)] rounded-lg overflow-hidden">
              <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between hover:bg-[var(--color-neutral-50)] transition-colors">
                <span className="font-medium text-[var(--color-neutral-900)]">What are your hours?</span>
                <ChevronDown size={20} className="text-[var(--color-neutral-500)] group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 py-4 border-t border-[var(--color-neutral-200)] text-sm text-[var(--color-neutral-600)]">
                We are open Monday through Friday, 7:00 AM to 6:00 PM.
              </div>
            </details>

            <details className="group bg-white border border-[var(--color-neutral-200)] rounded-lg overflow-hidden">
              <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between hover:bg-[var(--color-neutral-50)] transition-colors">
                <span className="font-medium text-[var(--color-neutral-900)]">What is your curriculum?</span>
                <ChevronDown size={20} className="text-[var(--color-neutral-500)] group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 py-4 border-t border-[var(--color-neutral-200)] text-sm text-[var(--color-neutral-600)]">
                We follow a play-based learning approach focusing on social, emotional, and cognitive development.
              </div>
            </details>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="File Upload"
          description="File input component"
          usage="Use for document or image uploads"
        >
          <div className="max-w-md">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[var(--color-neutral-300)] rounded-xl hover:border-[var(--color-primary-400)] hover:bg-[var(--color-primary-50)] transition-all cursor-pointer">
              <div className="flex flex-col items-center justify-center gap-2">
                <Upload size={32} className="text-[var(--color-neutral-400)]" />
                <p className="text-sm text-[var(--color-neutral-600)]">
                  <span className="font-medium text-[var(--color-primary-600)]">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-[var(--color-neutral-500)]">PNG, JPG up to 10MB</p>
              </div>
              <input type="file" className="hidden" />
            </label>
          </div>
        </ComponentDemo>

        <ComponentDemo
          title="Empty State"
          description="Placeholder for empty content"
          usage="Use when there's no data to display"
        >
          <div className="flex flex-col items-center justify-center p-12 bg-[var(--color-neutral-50)] rounded-xl max-w-md">
            <div className="w-16 h-16 bg-[var(--color-neutral-200)] rounded-full flex items-center justify-center mb-4">
              <Search size={32} className="text-[var(--color-neutral-400)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-neutral-900)] mb-2">No results found</h3>
            <p className="text-sm text-[var(--color-neutral-600)] text-center mb-4">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <button className="px-4 py-2 bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white rounded-lg transition-colors">
              Clear Filters
            </button>
          </div>
        </ComponentDemo>
      </ComponentSection>

      {/* PHOTO GALLERY GRID */}
      <ComponentSection title="Photo Gallery Grid" id="photo-gallery-grid">
        <ComponentDemo
          title="2×2 Facility Showcase"
          description="A responsive photo grid with overlay caption badges — ideal for showcasing facilities, classrooms, or campus highlights."
          usage="Use for facility showcases, campus tours, or any grouped image presentation with labels."
        >
          <PhotoGalleryGrid
            items={[
              { alt: 'Indoor playground with colourful slides and soft mats', label: '🎪 Indoor Playground' },
              { alt: 'Clean mushola prayer room for students', label: '🕌 Mushola' },
              { alt: 'Air-conditioned classroom with educational displays', label: '❄️ Classroom (AC)' },
              { alt: 'Spacious outdoor area with playground equipment', label: '🌳 Outdoor Area' },
            ]}
          />
        </ComponentDemo>

        <ComponentDemo
          title="3-Column Grid"
          description="The grid supports 3-column layout for wider presentations."
          usage="Use columns={3} for a wider gallery layout."
        >
          <PhotoGalleryGrid
            columns={3}
            items={[
              { alt: 'Library', label: '📚 Library' },
              { alt: 'Science lab', label: '🔬 Science Lab' },
              { alt: 'Art studio', label: '🎨 Art Studio' },
            ]}
          />
        </ComponentDemo>
      </ComponentSection>

      {/* Component Count Summary */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--color-primary-50)] to-[var(--color-accent-50)] border border-[var(--color-primary-200)]">
        <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-4">Component Library</h2>
        <p className="text-[var(--color-neutral-700)] mb-4">
          This design system includes 35+ components covering all essential UI patterns. Each component is designed 
          with accessibility, responsiveness, and delightful interactions in mind.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded-lg">
            <p className="text-2xl font-bold text-[var(--color-primary-600)]">10+</p>
            <p className="text-sm text-[var(--color-neutral-600)]">Button variants</p>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <p className="text-2xl font-bold text-[var(--color-secondary-600)]">8+</p>
            <p className="text-sm text-[var(--color-neutral-600)]">Input types</p>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <p className="text-2xl font-bold text-[var(--color-accent-600)]">4+</p>
            <p className="text-sm text-[var(--color-neutral-600)]">Card styles</p>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <p className="text-2xl font-bold text-[var(--color-primary-600)]">13+</p>
            <p className="text-sm text-[var(--color-neutral-600)]">More components</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component Section Wrapper
function ComponentSection({ 
  title, 
  id, 
  children 
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
      <div className="space-y-8">
        {children}
      </div>
    </section>
  );
}

// Component Demo Wrapper
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
    <div className="p-6 bg-white border border-[var(--color-neutral-200)] rounded-xl">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[var(--color-neutral-900)] mb-2">{title}</h3>
        <p className="text-sm text-[var(--color-neutral-600)] mb-1">{description}</p>
        <p className="text-xs text-[var(--color-neutral-500)]">
          <span className="font-medium">Usage:</span> {usage}
        </p>
      </div>
      <div className="p-6 bg-[var(--color-neutral-50)] rounded-lg">
        {children}
      </div>
    </div>
  );
}
