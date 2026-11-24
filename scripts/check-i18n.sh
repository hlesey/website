#!/usr/bin/env bash
# Checks the built site (run `npm run build` first) for the English/Romanian setup.
set -u
cd "$(dirname "$0")/.."

fail=0
check() { # check <description> <command...>
  local desc=$1; shift
  if "$@" >/dev/null 2>&1; then echo "ok   $desc"; else echo "FAIL $desc"; fail=1; fi
}
has() { grep -q -- "$2" "$1"; }
lacks() { test -f "$1" && ! grep -q -- "$2" "$1"; }

check "romanian site is built"                 test -f build/ro/index.html
check "english home has language dropdown"     has build/index.html 'Romana'
check "english home is still english"          has build/index.html 'View Our Courses'
check "english about is still english"         has build/about/index.html 'About Q.E.D.'
check "romanian home is translated"            has build/ro/index.html 'Vezi cursurile'
check "romanian about is translated"           has build/ro/about/index.html 'Despre Q.E.D.'
check "romanian certifications is translated"  has build/ro/certifications/index.html 'Trasee de certificare'
check "romanian news is translated"            has build/ro/news/index.html 'Ultimele stiri'

for page in index news certifications contact about; do
  f=build/ro/$page/index.html; [ "$page" = index ] && f=build/ro/index.html
  check "no english-only links on ro/$page" lacks "$f" 'href="/docs'
done

ro_course=build/ro/docs/kubernetes-fundamentals/index.html
check "ro course: content heading translated"  has "$ro_course" 'Continutul cursului'
check "ro course: day heading translated"      has "$ro_course" 'Ziua 1'
check "ro course: overview translated"         has "$ro_course" 'Prezentarea cursului'
check "ro course: module title kept english"   has "$ro_course" 'Docker Overview'
check "ro course: lab kept english"            has "$ro_course" 'Set up your Docker host machine'

check "no diacritics in i18n/ro"               bash -c "test -d i18n/ro && ! grep -rqE 'ă|â|î|ș|ț|ş|ţ|Ă|Â|Î|Ș|Ț|Ş|Ţ' i18n/ro"
check "no diacritics in built ro site"         bash -c "test -d build/ro && ! grep -rqE 'ă|â|î|ș|ț|ş|ţ|Ă|Â|Î|Ș|Ț|Ş|Ţ' build/ro --include=*.html"

exit $fail
