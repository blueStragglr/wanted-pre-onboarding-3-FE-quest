import { Fragment } from "react"

import DrawNav from './DrawNav';
import Header from './Header';
import { Route, Routes } from "react-router";
import Page from "../Page/Page";

const Layout = props => {

	return (
		<Fragment>
			<Header />
			<main role="main" className="flex flex-row w-full h-screen font-sans App">
				<DrawNav />
				<Routes>
					<Route path="/" element={<Page heading="첫 번째 페이지입니다." text1="One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted" text2="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs." />} />
					<Route path="intro/*" element={<Page heading="두 번째 페이지입니다." text1="One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted" text2="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs."  />} />
					<Route path="sub/*" element={<Page heading="세 번째 페이지입니다." text1="One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted" text2="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs."  />} />
				</Routes>
			</main>
		</Fragment>
	)
}

export default Layout;