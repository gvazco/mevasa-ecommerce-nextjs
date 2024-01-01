import { useState, useEffect } from "react";
import { Image, Icon, Input } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { map } from "lodash";
import classNames from "classnames";
import { Platform, CatProducts, MainMenu } from "@/api";
import styles from "./Menu.module.scss";

const platformCtrl = new Platform();
const catProductsCtrl = new CatProducts();
const mainMenuCtrl = new MainMenu();

export function Menu(props) {
  const { isOpenSearch } = props;
  const [platforms, setPlatforms] = useState(null);
  const [menus, setMenus] = useState(null);
  const [showSearch, setShowSearch] = useState(isOpenSearch);
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const openCloseSearch = () => setShowSearch((prevState) => !prevState);

  useEffect(() => {
    (async () => {
      try {
        const response = await platformCtrl.getAll();
        setPlatforms(response.data);
        const responseMenu = await mainMenuCtrl.getAll();
        setMenus(responseMenu.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    setSearchText(router.query.s || "");
  }, []);

  const onSearch = (text) => {
    setSearchText(text);
    router.replace(`/search?s=${text}`);
  };

  return (
    <div className={styles.platforms}>
      {map(menus, (menu) => (
        <Link key={menu.id} href={`/${menu.attributes.slug}`}>
          <Image src={menu.attributes?.icon?.data?.attributes?.url} />
          <span className={styles.title}>{menu.attributes.title}</span>
        </Link>
      ))}

      <button className={styles.search} onClick={openCloseSearch}>
        <Icon name="search" />
      </button>

      <div
        className={classNames(styles.inputContainer, {
          [styles.active]: showSearch,
        })}
      >
        <Input
          id="search-games"
          placeholder="Buscador"
          className={styles.input}
          focus={true}
          value={searchText}
          onChange={(_, data) => onSearch(data.value)}
        />
        <Icon
          name="close"
          className={styles.closeInput}
          onClick={openCloseSearch}
        />
      </div>
    </div>
  );
}
