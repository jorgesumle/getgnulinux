less /usr/share/i18n/SUPPORTED
npx ncu
npx browserslist@latest --update-db
autoreconf --install
make deploy
make maintainer-clean
make clean
make update-po
make all install
./configure --localedir=/home/node/getgnulinux/docroot/locale/
